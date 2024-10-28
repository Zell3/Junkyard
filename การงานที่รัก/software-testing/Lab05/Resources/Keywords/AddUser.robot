*** Keywords ***
Add user into UMS
  #Click Into Add Page
  Wait Until Element Is Visible   ${ums_user_add}        ${wait_state_timeout}                Failed, Automated Can't visible Element.
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
  Input Text                       ${ums_add_user_id}           ${AddUserId}
  Input Text                       ${ums_add_user_name}         ${AddName}
  Select From List By Value        ${ums_add_user_wg}           ${AddWorkgroup} 
  Input Text                       ${ums_add_user_username}     ${AddUsername}
  Input Password                   ${ums_add_user_password}     ${AddPassword}
  Select From List By Value        ${ums_add_user_dp}           ${AddDeployement}
  Select From List By Value        ${ums_add_user_qs}           ${AddQuestion}
  Input Text                       ${ums_add_user_answer}       ${AddAnswer}
  Input Text                       ${ums_add_user_email}        ${AddEmail}
  Input Text                       ${ums_add_user_desc}         ${AddDescription}
  IF  '${AddActive}'=='Y'
    Click Element                  ${ums_add_user_active}
  END
  IF  '${AddAdmin}'=='Y'
    Click Element                  ${ums_add_user_admin}
  END
  Click Element    ${ums_add_user_submit}

Check User
    # Click Into User List Page
    Wait Until Element Is Visible   ${ums_user_list}        ${wait_state_timeout}                Failed, Automated Can't visible Element.
    Click Element                   ${ums_user_list}
    ${IsFound}       Set Variable    N

    FOR     ${page}    IN RANGE    1    1000
        ${nextpage}=    Evaluate    ${page} + 1
        Sleep    2s
        ${rows}=    Selenium2Library.Get Element Count    ${ums_user_list_table}
        ${rows}=    Evaluate     ${rows} + 1

        FOR    ${index}    IN RANGE    1    ${rows}
            @{cells}=         Get WebElements   xpath=//*[@id="example"]/tbody/tr[${index}]/td
            ${tb_usname}=     Selenium2Library.Get Element Attribute       ${cells}[1]    innerText
            ${tb_uspscode}=   Selenium2Library.Get Element Attribute       ${cells}[2]    innerText

            IF    '${tb_usname}'=='${AddName}'
              IF    '${tb_uspscode}'=='${AddUserId}'
                Sleep    0.5s
                Click Element    xpath=//*[@id="example"]/tbody/tr[${index}]/td[5]/center/i
                Sleep    1s
                ${element_visible}=  Run Keyword And Return Status  Element Should Be Visible   ${ums_del_user_popup}
                Run Keyword If  ${element_visible}==True   Click Element  ${ums_del_user_popup_cf_btn}
                Sleep    0.5s
                ${IsFound}       Set Variable    Y
                Exit For Loop
              END
            END
        END

        Exit For Loop If    '${IsFound}'=='Y'
        ${nextpagebutton}=  Run Keyword And Return Status  Element Should Be Visible    xpath=//ul/li/a[text()="${nextpage}"]
        
        IF    ${nextpagebutton}
            Click Element    xpath=//ul/li/a[text()="${nextpage}"]
        ELSE
            Exit For Loop
        END   
    END

    # Going Back To Menu Page
    Wait Until Element Is Visible   xpath=//*[@id="layout-static"]/div[2]/div/div/div[1]/a[3]
    Click Element                   xpath=//*[@id="layout-static"]/div[2]/div/div/div[1]/a[3]