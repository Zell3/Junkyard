*** Settings ***
Resource            ..//init.robot
Variables          ..//TestData//${SITE}//F0_Login.yaml
Test Teardown      Close Browser Seminar

*** Variables ***

*** Test Cases ***
F0_Login_001
    Open Seminar                    ${WEB.${SITE}}          ${BROWSER} 
    Wait Until Element Is Visible   ${lbl_Login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Wait Until Element Is Visible   ${txt_unidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Text                      ${txt_unidentifier}     ${${TEST NAME}.Username} 
    Wait Until Element Is Visible   ${txt_pwidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Password                  ${txt_pwidentifier}     ${${TEST NAME}.Password} 
    Wait Until Element Is Visible   ${btn_login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Click Element                   ${btn_login}             
    Wait Until Element Is Visible   ${lbl_menu}             ${wait_state_timeout}                Failed, Automated Can't Login.  

F0_Login_002
    Open Seminar                    ${WEB.${SITE}}          ${BROWSER} 
    Wait Until Element Is Visible   ${lbl_Login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Wait Until Element Is Visible   ${txt_unidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Text                      ${txt_unidentifier}     ${${TEST NAME}.Username} 
    Wait Until Element Is Visible   ${txt_pwidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Password                  ${txt_pwidentifier}     ${${TEST NAME}.Password} 
    Wait Until Element Is Visible   ${btn_login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Click Element                   ${btn_login}             
    Wait Until Element Is Visible   ${lbl_menu}             ${wait_state_timeout}                Failed, Automated Can't Login.  

F0_Login_003
    Open Seminar                    ${WEB.${SITE}}          ${BROWSER} 
    Wait Until Element Is Visible   ${lbl_Login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Wait Until Element Is Visible   ${txt_unidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Text                      ${txt_unidentifier}     ${${TEST NAME}.Username} 
    Wait Until Element Is Visible   ${txt_pwidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Password                  ${txt_pwidentifier}     ${${TEST NAME}.Password} 
    Wait Until Element Is Visible   ${btn_login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Click Element                   ${btn_login}             
    Wait Until Element Is Visible   ${lbl_menu}             ${wait_state_timeout}                Failed, Automated Can't Login.
