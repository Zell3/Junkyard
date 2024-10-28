*** Settings ***
Library         			Selenium2Library
Library     				ScreenCapLibrary   
Test Teardown   			Close Browser

*** Variables ***
#Locator
#ลงชื่อเข้าใช้งาน
${lbl_Login}                xpath=//h3[normalize-space()="ลงชื่อเข้าใช้งาน"]
#อีเมล/บัญชีผู้ใช้			
${txt_unidentifier}			xpath=//div[@id="session_username_input"]/div/input[@id="session_username"]
#พาสเวิร์ด			
${txt_pwidentifier}			xpath=//div[@id="session_password_input"]/div/input[@id="session_password"]
#ปุ่ม "เข้าใช้งาน"	
${btn_login}             	xpath=//input[@name="commit" and @type="submit" and @value="เข้าใช้งาน"]
# email : sirichaia@buu.ac.th					
${lbl_email}				xpath=//dl/dt[normalize-space()="อีเมล"]/following-sibling::dd[normalize-space()="sirichaia@buu.ac.th"]
                                    
                                
#Value                  
${wait_state_timeout}       5s
${url}                      https://opend.data.go.th/register_api/login.php
${BROWSER} 					chrome
${Username} 				sirichaia@buu.ac.th
${Password} 				Siri@2024


*** Test Cases ***
Verify Login
    Open Browser            		${url}					${BROWSER}
	Maximize Browser Window
    Sleep    2s    รอเว็บเพจโหลดหน้า Login
    Wait Until Element Is Visible   ${lbl_Login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Wait Until Element Is Visible   ${txt_unidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Text                      ${txt_unidentifier}     ${Username} 
    Wait Until Element Is Visible   ${txt_pwidentifier}     ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Input Password                  ${txt_pwidentifier}     ${Password} 
    Wait Until Element Is Visible   ${btn_login}            ${wait_state_timeout}                Failed, Automated Can't visible Element.  
    Click Element                   ${btn_login}             
    Wait Until Element Is Visible   ${lbl_email}            ${wait_state_timeout}                Failed, Automated Can't Login.  
	Sleep    2s    รอเว็บเพจโหลดหน้า User
    Take Screenshot    name=65160101_mid_1.png

	