*** Keywords ***
Prepare Data for F0_Login
   [Arguments]      ${ExcelPath}      ${SheetName}                 
    Open workbook    ${ExcelPath}
    ${worksheet}=    Read worksheet     name=${SheetName}     header=${TRUE}
    FOR  ${index}  IN   @{worksheet}    
        Skip If     '${index['TestCaseName']}'=='${TEST NAME}' and '${index['Flag']}'=='N' 
        IF          '${index['TestCaseName']}'=='${TEST NAME}' and '${index['Flag']}'=='Y'  Sub Prepare Data for F0_Login  ${index}
    END
    Close Workbook

Prepare Data for F1_AddUser
   [Arguments]      ${ExcelPath}      ${SheetName}                 
    Open workbook    ${ExcelPath}
    ${worksheet}=    Read worksheet     name=${SheetName}     header=${TRUE}
    FOR  ${index}  IN   @{worksheet}    
        Sub Prepare Data for F1_AddUser  ${index}
    END
    Close Workbook


Sub Prepare Data for F0_Login
   [Arguments]      ${Testdata} 
    Set Global Variable     ${Username}             ${Testdata['Username']}
    Set Global Variable     ${Password}             ${Testdata['Password']}
    Generate Random Thai String
    Generate Random Eng String
    Generate Data From Datetime

Sub Prepare Data for F1_AddUser
   [Arguments]              ${Testdata}
    Set Global Variable     ${AddUserId}               ${Testdata['UsPsCode']}
    Set Global Variable     ${AddName}                 ${Testdata['UsName']}
    Set Global Variable     ${AddWorkgroup}            ${Testdata['UsWgID']}
    Set Global Variable     ${AddUsername}             ${Testdata['UsLogin']}
    Set Global Variable     ${AddPassword}             ${Testdata['UsPassword']}
    Set Global Variable     ${AddDeployement}          ${Testdata['UsDpID']}
    Set Global Variable     ${AddQuestion}             ${Testdata['UsQsID']}
    Set Global Variable     ${AddAnswer}               ${Testdata['UsAnswer']}
    Set Global Variable     ${AddEmail}                ${Testdata['UsEmail']}
    Set Global Variable     ${AddDescription}          ${Testdata['UsDesc']}
    Set Global Variable     ${AddActive}               ${Testdata['UsActive']}
    Set Global Variable     ${AddAdmin}                ${Testdata['UsAdmin']}

Generate Random Eng String
    ${random_string}=    Evaluate    ''.join(random.choice('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') for _ in range(${LENGTH}))    modules=random
    Log    Random String: ${random_string}
    [Return]        ${random_string}

Generate Random Thai String
    ${thai_characters}=     Create List    ก    ข    ค    ง    จ    ฉ    ช    ซ    ฌ    ญ    ฎ    ฐ    ฑ    ฒ    ณ    ด    ต    ถ    ท    ธ    น    บ    ป    ผ    ฝ    พ    ฟ    ภ    ม    ย    ร    ล    ว    ศ    ษ    ส    ห    ฬ    อ    ฮ
    ${random_string}=       Evaluate    ''.join(random.choice(${thai_characters}) for _ in range(${LENGTH}))    modules=random
    Log    Random Thai String: ${random_string}
    [Return]        ${random_string}

Generate Data From Datetime
    ${SetDatetime}  Evaluate  '${YYYYMMDD}'.format(dt=datetime.datetime.now())  modules=datetime
    Log    Generate Data: ${SetDatetime}
    [Return]        ${SetDatetime}