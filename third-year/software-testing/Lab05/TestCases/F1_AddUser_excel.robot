*** Settings ***
Resource            ..//init.robot
Test Teardown      Close Browser Seminar
Library    XML

*** Variables ***
${EXCEL FILE}     ${CURDIR}//..//TestData//${SITE}//F1_AddUser.xlsx
${SHEET NAME}     F1_AddUser

*** Test Cases ***
F1_AddUser_001    # check if user in list remove it and add it again
    Login    admin    adminpassword
    Prepare Data for F1_AddUser     ${EXCEL FILE}           ${SHEET NAME}
    Wait Until Element Is Visible   ${ums_menu}             ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Click Element                   ${ums_menu}
    Wait Until Element Is Visible   ${ums_menu_user}        ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Click Element                   ${ums_menu_user}
    Check User
    Add user into UMS
