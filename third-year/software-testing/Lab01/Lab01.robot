*** Settings ***
Library             Selenium2Library
Test Setup          Open Reg
Test Teardown       Close Browser

*** Variables ***
#Locator
${btn_MainMenu}             xpath=//h1[text()='เมนูหลัก']
${lab_Graduation}           xpath=//td[text()='จบการศึกษา']
${lab_GraduationCourse}     xpath=//td[@class='normaldetail' and contains(text(),'วท.บ. (วิศวกรรมซอฟต์แวร์) ใหม่ 53 - ป.ตรี 4 ปี ปกติ')]

&{dict_Dropdown}            Faculty=xpath=//select//option[text()='34 : คณะวิทยาการสารสนเทศ']            
...                         Year=xpath=//a[text()='2557']

&{dict_Menu}                Graduation=xpath=//a[text()='ผู้สำเร็จการศึกษา'] 

#Value                  
${wait_state_timeout}       5s
${url_reg}                  https://reg.buu.ac.th/registrar/home.asp

*** Keywords ***
Open Reg
    [Documentation]   Keyword สำหรับเปิด Website 
    ...     - = Argument = 
    ...     - 1) url_reg : ระบุ URL ที่ต้องการเปิด
    ...     - = Create/Modify = 
    ...     - 1) Dev_siri  3/5/24 : Create Keywords
    Open Browser                    ${url_reg}          chrome
    Wait Until Element Is Visible   ${btn_MainMenu}     ${wait_state_timeout}                       Failed, Automated Can't Open Browser
    Capture Page Screenshot	        

Select Dropdown ${Name}
    [Documentation]   Keyword สำหรับเลือก Dropdown
    ...     - = Argument = 
    ...     - 1) ${dict_Dropdown} : ระบุตำแหน่งของ Dropdown โดยจัดเก็นไว้ในรูปแบบ Dict
    ...     - 2) ${Name} : ระบุ Option ที่ต้องการเลือก
    ...     - = Create/Modify = 
    ...     - 1) Dev_siri  3/5/24 : Create Keywords
    Log to console                  Select Dropdown ${Name}
    Wait Until Element Is Visible   ${dict_Dropdown['${Name}']}        ${wait_state_timeout}         Failed, Automated Can't Visible Element[Name].
    Click Element                   ${dict_Dropdown['${Name}']} 

Select Menu ${Name}
    [Documentation]   Keyword สำหรับเลือก Menu
    ...     - = Argument = 
    ...     - 1) ${dict_Menu} : ระบุตำแหน่งของ Menu โดยจัดเก็นไว้ในรูปแบบ Dict
    ...     - 2) ${Name} : ระบุ Menu ที่ต้องการเลือก
    ...     - = Create/Modify = 
    ...     - 1) Dev_siri  3/5/24 : Create Keywords
    [Arguments]                     ${CheckPoint} 
    Log to console                  Select Menu ${Name}
    Wait Until Element Is Visible   ${dict_Menu['${Name}']}      ${wait_state_timeout}         Failed, Automated Can't Visible Element[${Name}].
    Click Element                   ${dict_Menu['${Name}']} 
    Wait Until Element Is Visible   ${CheckPoint}                ${wait_state_timeout}         Failed, Automated Can't Be Found ${Name} Page.  
    Capture Page Screenshot	        

*** Test Cases ***
Verify Graduation
    [Tags]      Success
    [Documentation]
    ...     -= TEST DESCRIPTION =-
    ...     - ตรวจสอบการสำเร็จการศึกษาของ วท.บ. (วิศวกรรมซอฟต์แวร์)
    ...     -= TEST STEPS =-
    ...     - 1. เข้าสู่เว็บไซต์ https://reg.buu.ac.th/registrar/home.asp
    ...     - 2. เลือกเมนู Graduation
    ...     - 3. เลือก Dropdown Faculty
    ...     - 4. เลือก Year
    ...     EXPECTED RESULT:
    ...     - ตรวจสอบการสำเร็จการศึกษาของ วท.บ. (วิศวกรรมซอฟต์แวร์)
    Select Menu Graduation           ${lab_Graduation}
    Select Dropdown Faculty
    Select Dropdown Year
    Wait Until Element Is Visible   ${lab_GraduationCourse}      ${wait_state_timeout}         Failed, Application Can't Be Displayed [การสำเร็จการศึกษาของ วท.บ. (วิศวกรรมซอฟต์แวร์)]
    Capture Page Screenshot	        


