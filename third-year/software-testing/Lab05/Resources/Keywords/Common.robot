*** Keywords ***
Open Seminar
    [Arguments]         ${url}=${url}       ${run_browser}=${browser}
    open browser        ${url}              ${run_browser}
    # Start Video Recording   
    Maximize Browser Window

Close Browser Seminar
    # Stop Video Recording
    Close Browser

Login
    [Arguments]                     ${Username}             ${Password}
    Open Seminar                    ${WEB.${SITE}}          ${BROWSER} 
    Wait Until Element Is Visible   ${lbl_Login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Wait Until Element Is Visible   ${txt_unidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Text                      ${txt_unidentifier}     ${Username}
    Wait Until Element Is Visible   ${txt_pwidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Password                  ${txt_pwidentifier}     ${Password}
    Wait Until Element Is Visible   ${btn_login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Click Element                   ${btn_login}             
    Wait Until Element Is Visible   ${lbl_menu}             ${wait_state_timeout}                Failed, Automated Can't Login.