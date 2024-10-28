*** Settings ***
Library             RequestsLibrary
Library             JsonValidator
Library             JSONLibrary
Library             RPA.Tables
Library             RPA.Excel.Files
Variables           api_settings.yaml
Suite Setup         Ping Server

*** Keywords ***
Ping Server
    Create Session      SessionPing        ${BASE_URL}          verify=True
    ${response}=        GET On Session     SessionPing          ping 
    Should Be Equal As Strings      ${response.status_code}     200

*** Test Cases ***
Get All Province
    Ping Server
    Create Session      Get All Province   ${BASE_URL}          verify=True
    ${response}=        GET On Session     Get All Province     ${END_POINT}
    Should Be Equal As Strings      ${response.status_code}     200



   
   
   
   
   
   
   
   
    #Part Verify
    Element Should Exist        ${response.json()}     .code:("200")
    Element Should Exist        ${response.json()}     .status:(True)

    ${result}=          Select Elements         ${response.json()}      .result
    FOR     ${item}     IN      @{result[0]}
        log             ${item}
    END
	
    Create Workbook    path=${OUTPUT_DIR}${/}List_Province.xlsx    fmt=xlsx
    Create Worksheet
    ...    name=Province
    ...    content=${result[0]}
    ...    header=True
    Remove worksheet    Sheet
    Save Workbook  


	