*** Settings ***
Library         Selenium2Library
Library         RPA.Tables
Library         RPA.Excel.Files
Library         OperatingSystem
Library         String
Library         BuiltIn
Library         Collections
Library         ScreenCapLibrary
Test Teardown   Close Browser

*** Variables ***
# Locator
${btn_login}               xpath=//div[@id="menu"]//a[text()="เข้าสู่ระบบ"]
${form_login}              xpath=//form[@action="validate.asp"][@method="POST"]
${nav_menu}                xpath=//div[@id="menu"]

# Value                  
${wait_state_timeout}      5s
${url}                     https://reg.buu.ac.th/
${EXCEL_FILE}              ${CURDIR}/../65160101_mid_3.xlsx
${SHEET_NAME}              65160101_mid_3

*** Keywords ***
Log In
    Wait Until Element Is Visible    ${form_login}
    Input Text      xpath=//form[@action="validate.asp"][@method="POST"]//input[@name="f_uid"]    65160101
    Input Password  xpath=//form[@action="validate.asp"][@method="POST"]//input[@name="f_pwd"]    _Ptsd124578963
    Click Button    xpath=//form[@action="validate.asp"][@method="POST"]//input[@type="SUBMIT"]

Click Menu
    [Arguments]    ${menu_item}
    Wait Until Element Is Visible    ${nav_menu}
    Click Element    xpath=//div[@id="menu"]//a[text()="${menu_item}"]

Insert To Excel
    Open Workbook    ${EXCEL_FILE}
    Set Active Worksheet    ${SHEET NAME}
    Set Styles    A2:E6
    ...    font_name=TH SarabunPSK
    ...    size=16
    Set Styles    A1:A6
    ...    font_name=TH SarabunPSK
    ...    size=16
    ...    bold=True
    ...    cell_fill=c8c8c8
    ${row} =    Set Variable    1
    FOR  ${rows}    IN RANGE    3     9
        ${day}=    Get Element Attribute    //table/tbody/tr[${rows}]/td[@class="timeheader"]    innerText

        # Remove non-breaking spaces, remove line feed and strip the text
        ${day}=    Strip String    ${day.replace('\xa0', '').replace('\n', '')}
        Set Cell Value    ${row}    1    ${day}
        @{RAW_DATA_DAY}=    Get WebElements    //table/tbody/tr[${rows}]/td[@class="timeheader"]/../td[@class="normaldetail"]
        ${col} =    Set Variable    2
        FOR    ${columns}    IN    @{RAW_DATA_DAY}
            ${class_text}=    Get Element Attribute    ${columns}    innerText

            # Remove non-breaking spaces and strip the text
            ${class_cleaned}=    Strip String    ${class_text.replace('\xa0', '')}

            # Split the cleaned text by newline
            @{class_array}=    Split String    ${class_cleaned}    \n

            # Get value course code from class_array[0]
            ${course_code} =    Get From List    ${class_array}    0

            # Get value room from class_array[1]
            ${room} =    Get From List    ${class_array}    1

            # Get value time from class_array[2]
            ${time} =    Get From List    ${class_array}    2

            # Formatted data
            ${combined_data} =    Set Variable    ${course_code} ${SPACE} ${room} ${SPACE} ${time}
            Set Cell Value    ${row}    ${col}    ${combined_data}
            ${col} =    Evaluate    ${col} + 1
        END
        ${row}=    Evaluate    ${row} + 1
    END
    Save Workbook    ${EXCEL_FILE}
    Close Workbook


*** Test Cases ***
Get Class schedule
    # o	Login 
	Open Browser    ${url}    chrome
    Maximize Browser Window
    Wait Until Element Is Visible    ${btn_login}    15s    Failed, Application Can't Be Displayed
    Click Element    ${btn_login}
    # o	เลือกเมนุตารางสอน
    Log In
    Click Menu    ตารางเรียน/สอบ
    # o	บันทึกหน้าจอ โดยให้ตั้งชื่อ xxxxxxxx_mid_3.png
    Sleep    2s
    Take Screenshot    name=65160101_mid_3.png
    # o	วนอ่านค่า (loop) ข้อความในตารางสอน
    # o	สร้างไฟล์ text/excel  ชื่อ xxxxxxxx_mid_3.txt/xxxxxxxx_mid_3.xlsx
    Insert To Excel