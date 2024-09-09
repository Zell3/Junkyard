*** Keywords ***
Add Users
    # Header
    ${HEADERS}=         Create Dictionary
    ...                 Content-Type=application/json

    # Request body
    ${users}=           Create Dictionary
    ...                 name=${${TEST NAME}.name}
    ...                 job=${${TEST NAME}.job}

    # Create session
    Create Session      Add Users          ${BASE_URL.${SITE}}       verify=True

    # Get POST data by sending user
    ${response}=        POST On Session    Add Users                 /api/users        json=${users}        headers=${HEADERS}

    # Check response code = 201
    Should Be Equal As Strings      ${response.status_code}     201

    # Check if there is any ID
    Element Should Exist            ${response.json()}          .id

    # Print content
    Log To Console                  ${response.content}

    # Collect ID data (to use in update user)
    ${newid}=                       Select Elements              ${response.json()}      .id
    Set Suite Variable              ${NEW_ID}                    ${newid}[0]

Update Users
    # Get ID from Add Users
    [Arguments]         ${ID}=${NEW_ID}

    # Header
    ${HEADERS}=         Create Dictionary
    ...                 Content-Type=application/json

    # Request body
    ${users}=           Create Dictionary
    ...                 name=${${TEST NAME}.name}
    ...                 job=${${TEST NAME}.job}

    # Create session
    Create Session                  Update Users                ${BASE_URL.${SITE}}       verify=True

    # Send PUT request to update user
    ${response}=                    PUT On Session              Update Users              /api/users/${ID}        json=${users}        headers=${HEADERS}

    # Check response code = 200
    Should Be Equal As Strings      ${response.status_code}     200

    # Print content
    Log To Console                  ${response.content}