***Settings*** 
Resource            ..//init.robot
Variables          ..//TestData//${SITE}//F1_AddUser.yaml
Test Teardown      Close Browser Seminar

*** Variables ***

*** Test Cases ***
F1_AddUser_001    # Add user by random userpscode
    Login    admin    adminpassword
    ${AddUsername_random}=    Generate Random String    5-10
    ${AddUserId_random}=      Generate Random String    10    [NUMBERS]
    
    #Click Into Add Page
    Wait Until Element Is Visible    ${ums_menu}             ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Click Element                    ${ums_menu}
    Wait Until Element Is Visible    ${ums_menu_user}        ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Click Element                    ${ums_menu_user}
    Wait Until Element Is Visible  ${ums_user_add}        ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Click Element                   ${ums_user_add}

    # Check Element In Web Page  
    Wait Until Element Is Visible    ${ums_add_user_id}             ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_name}           ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_wg}             ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_username}       ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_password}       ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_dp}             ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_qs}             ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_answer}         ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_email}          ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_desc}           ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_active}         ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_admin}          ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Wait Until Element Is Visible    ${ums_add_user_submit}         ${wait_state_timeout}                Failed, Automated Can't visible Element.
    
    # Action  
    Input Text                       ${ums_add_user_id}           ${AddUserId_random}    
    Input Text                       ${ums_add_user_name}         ${${TEST NAME}.UsName} 
    Select From List By Value        ${ums_add_user_wg}           ${${TEST NAME}.UsWgID} 
    Input Text                       ${ums_add_user_username}     ${${TEST NAME}.UsLogin}${AddUsername_random}
    Input Password                   ${ums_add_user_password}     ${${TEST NAME}.UsPassword} 
    Select From List By Value        ${ums_add_user_dp}           ${${TEST NAME}.UsDpID} 
    Select From List By Value        ${ums_add_user_qs}           ${${TEST NAME}.UsQsID} 
    Input Text                       ${ums_add_user_answer}       ${${TEST NAME}.UsAnswer} 
    Input Text                       ${ums_add_user_email}        ${${TEST NAME}.UsEmail} 
    Input Text                       ${ums_add_user_desc}         ${${TEST NAME}.UsDesc} 
    IF  '${${TEST NAME}.UsActive}'=='Y'
      Click Element                  ${ums_add_user_active}
    END
    IF  '${${TEST NAME}.UsAdmin}'=='Y'
      Click Element                  ${AddAdmin} 
    END
    Click Element    ${ums_add_user_submit}