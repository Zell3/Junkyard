*** Settings ***
Library         Selenium2Library
Library         BuiltIn
Library         Collections
Library         String
Test Setup      Open Reg
Test Teardown   Close Browser

*** Variables ***
# Locator
${btn_MainMenu}             xpath=//h1[text()='เมนูหลัก']
${menu_login}               xpath=//a[text()='เข้าสู่ระบบ']
${user_input}               xpath=//td[contains(text(), "รหัสประจำตัว")]/following-sibling::td/input[@type="TEXT" and @name="f_uid"]
${password_input}           xpath=//td[contains(text(), "รหัสประจำตัว")]/ancestor::tr/following-sibling::tr//span[contains(text(), "รหัสผ่าน")]/ancestor::tr//td/input[@type="PASSWORD" and @name="f_pwd"]
${menu_time_table}          xpath=//a[text()='ตารางเรียน/สอบ']
${table_time}               xpath=//table/tbody/tr/td//../td[@class]

# Value
${wait_state_timeout}       5s
${url_reg}                  https://reg.buu.ac.th/registrar/home.asp

*** Keywords ***
Open Reg
    Open Browser                    ${url_reg}          chrome
    Wait Until Element Is Visible   ${btn_MainMenu}     ${wait_state_timeout}

Login
    [Arguments]                     ${user}             ${password}
    Log To Console                  Login Reg by username ${user} and password ${password}
    Wait Until Element Is Visible   ${menu_login}
    Click Element                   ${menu_login}
    Wait Until Element Is Visible   ${user_input}
    Input Text                      ${user_input}       ${user}
    Wait Until Element Is Visible   ${password_input}
    Input Password                  ${password_input}   ${password}
    Wait Until Element Is Visible   xpath=//input[@type="SUBMIT" and contains(@value, "ตรวจสอบ")]
    Click Element                   xpath=//input[@type="SUBMIT" and contains(@value, "ตรวจสอบ")]

Check And Click
    [Arguments]    ${xpath}
    Log To Console    Checking and clicking element: ${xpath}
    Wait Until Element Is Visible   ${xpath}
    Wait Until Element Is Enabled   ${xpath}
    Wait Until Element Is Clickable ${xpath}
    Click Element                   ${xpath}
    Log To Console    Clicked element: ${xpath}

Create Timetable
    @{DATA}=    Create List

    @{RAW_DATA}=    Get WebElements       xpath=//tr/td[contains(@class,"normaldetail")]/../td[contains(@class,"timeheader")]
    FOR    ${day_value}    IN    @{RAW_DATA}
        ${day}=    Get Element Attribute       ${day_value}    innerText
        @{DATA_DAY}=    Create List

        @{RAW_DATA_DAY}=    Get WebElements    xpath=//tr/td[contains(@class,"timeheader") and contains(text(), "${day}")]/following-sibling::td[contains(@class,"normaldetail")]
        FOR    ${class_value}    IN    @{RAW_DATA_DAY}
            ${class_text}=           Get Element Attribute   ${class_value}    innerText

            # Remove non-breaking spaces and strip the text
            ${class_cleaned}=        Strip String    ${class_text.replace('\xa0', '')}

            # Split the cleaned text by newline
            @{class_array}=          Split String    ${class_cleaned}    \n

            # Further process each class entry
            ${course_section}=       Get From List    ${class_array}    0
            ${course_code}=          Replace String    ${course_section}    ,\s+    ','
            @{course_parts}=         Split String    ${course_code}    ,

            ${section_number}=       Get From List    ${course_parts}    1
            ${section_number}=       Strip String     ${section_number}

            ${course_code_only}=     Get From List    ${course_parts}    0

            ${room}=                 Get From List    ${class_array}    1
            ${time}=                 Get From List    ${class_array}    2

            @{final_class_array}=    Create List    ${course_code_only}    ${section_number}    ${room}    ${time}

            &{DIC_รายวิชา}=            Create Dictionary    วิชา=${final_class_array}
            Append To List           ${DATA_DAY}    ${DIC_รายวิชา}
        END
    
        &{DIC_Day}=    Create Dictionary    วัน${day}=${DATA_DAY}
        Append To List   ${DATA}    ${DIC_Day}
    END
    
    RETURN    ${DATA}

Format And Show Timetable
    Log To Console    ตารางสอน
    [Arguments]    ${timetable_data}
    FOR    ${day_dict}    IN    @{timetable_data}
        FOR    ${day}    IN    @{day_dict}
            Log To Console    ${day}
            ${classes}=    Get From Dictionary    ${day_dict}    ${day}
            FOR    ${class_dict}    IN    @{classes}
                ${class_info}=    Get From Dictionary    ${class_dict}    วิชา
                Log To Console    ${class_info}
            END
        END
    END

Format And Show Timetable Only ${specific_day}
    Log To Console    ตารางสอน
    [Arguments]    ${timetable_data}
    FOR    ${day_dict}    IN    @{timetable_data}
        FOR    ${day}    IN    @{day_dict}
            IF    '${day}' == '${specific_day}'
                Log To Console    ${day}
                ${classes}=    Get From Dictionary    ${day_dict}    ${day}
                FOR    ${class_dict}    IN    @{classes}
                    ${class_info}=    Get From Dictionary    ${class_dict}    วิชา
                    Log To Console    ${class_info}
                END
            END
        END
    END

*** Test Cases ***
Login Reg
    Login   65160239    .Pun0812489586

Check And Click Element By Xpath
    Login   65160239    .Pun0812489586
    Check And Click         ${menu_time_table}

# Collect Timetable Data
#     Login   65160239    .Pun0812489586
#     Check And Click         ${menu_time_table}
#     ${timetable_data}=      Create Timetable
#     Log                     ${timetable_data}

# Show Timetable
#     Login   65160239    .Pun0812489586
#     Check And Click             ${menu_time_table}
#     ${timetable_data}=          Create Timetable
#     Format And Show Timetable   ${timetable_data}

# Show Timetable Only Saturday
#     Login   65160239    .Pun0812489586
#     Check And Click                         ${menu_time_table}
#     ${timetable_data}=                      Create Timetable
#     Format And Show Timetable Only วันเสาร์    ${timetable_data}
