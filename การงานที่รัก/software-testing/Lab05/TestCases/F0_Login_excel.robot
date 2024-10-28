*** Settings ***
Resource            ..//init.robot
Test Teardown      Close Browser Seminar

*** Variables ***
${EXCEL FILE}     ${CURDIR}//..//TestData//${SITE}//F0_Login.xlsx
${SHEET NAME}     F0_Login

*** Test Cases ***
F0_Login_001
    Prepare Data for F0_Login       ${EXCEL FILE}       ${SHEET NAME}
    Open Seminar                    ${WEB.${SITE}}      ${BROWSER} 
    Wait Until Element Is Visible   ${lbl_Login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Wait Until Element Is Visible   ${txt_unidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Text                      ${txt_unidentifier}     ${Username}
    Wait Until Element Is Visible   ${txt_pwidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Password                  ${txt_pwidentifier}     ${Password}
    Wait Until Element Is Visible   ${btn_login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Click Element                   ${btn_login}             
    Wait Until Element Is Visible   ${lbl_menu}             ${wait_state_timeout}                Failed, Automated Can't Login.  

F0_Login_002
    Prepare Data for F0_Login       ${EXCEL FILE}       ${SHEET NAME}
    Open Seminar                    ${WEB.${SITE}}      ${BROWSER} 
    Wait Until Element Is Visible   ${lbl_Login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Wait Until Element Is Visible   ${txt_unidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Text                      ${txt_unidentifier}     ${Username}
    Wait Until Element Is Visible   ${txt_pwidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Password                  ${txt_pwidentifier}     ${Password}
    Wait Until Element Is Visible   ${btn_login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Click Element                   ${btn_login}             
    Wait Until Element Is Visible   ${lbl_menu}             ${wait_state_timeout}                Failed, Automated Can't Login.  

F0_Login_003
    Prepare Data for F0_Login       ${EXCEL FILE}       ${SHEET NAME}
    Open Seminar                    ${WEB.${SITE}}      ${BROWSER} 
    Wait Until Element Is Visible   ${lbl_Login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Wait Until Element Is Visible   ${txt_unidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Text                      ${txt_unidentifier}     ${Username}
    Wait Until Element Is Visible   ${txt_pwidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Password                  ${txt_pwidentifier}     ${Password}
    Wait Until Element Is Visible   ${btn_login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Click Element                   ${btn_login}             
    Wait Until Element Is Visible   ${lbl_menu}             ${wait_state_timeout}                Failed, Automated Can't Login.  
