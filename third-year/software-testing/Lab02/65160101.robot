
*** Settings ***
Library             Selenium2Library
Library    Screenshot
Library    XML
Test Teardown       Close Browser

*** Variables ***
#Locator
${btn_close}                xpath=//div[@id='whats-new-modal']//button[@class='close']       
${icn_tax}                  xpath=//div[@id="home-main-content"]//div[@id="image-menu-mytax"]
${icn_budget}               xpath=//div[@id="home-main-content"]//div[@id="image-menu-dashboard1"]
${icn_procurement}          xpath=//div[@id="home-main-content"]//div[@id="image-menu-dashboard2"]


#Value                  
${wait_state_timeout}       5s
${url}                      https://govspending.data.go.th/

*** Test Cases ***
Verify Home Page
    Open Browser                    ${url}          chrome
    Wait Until Element Is Visible   ${btn_close}        
    Click Element                   ${btn_close}
    Wait Until Element Is Visible   xpath=//div[@id="first-title"]
    Wait Until Element Is Visible   ${icn_tax}
    Wait Until Element Is Visible   ${icn_budget}
    Wait Until Element Is Visible   ${icn_procurement}

Verify Tax Page
    Open Browser                    ${url}          chrome
    Wait Until Element Is Visible   ${btn_close}        
    Click Element                   ${btn_close}
    Wait Until Element Is Visible   ${icn_tax}
    Click Element                   ${icn_tax}
    Wait Until Element Is Visible   xpath=//div[@id="navbarCollapse"]/ul/li[@class="active"]/a[text()=" ภาษีมาจากไหน"]
    Wait Until Element Is Visible   xpath=//div[@class="border-div"]//h2[text()="ผลรวมรายได้จัดเก็บของรัฐบาล (Gross) ในปี 2567"]//following-sibling::div//*[local-name()="text" and text()="962,350"]
    Wait Until Element Is Visible   xpath=//div[@class="border-div"]//h2[text()="ผลการจัดเก็บรายได้ของกรมสรรพากร ในปี 2567 เทียบปี 2566"]//following-sibling::div//*[local-name()="text" and text()="ภาษีเงินได้บุคคลธรรมดา"]
 	
Verify Budget Page
    Open Browser                    ${url}          chrome
    Wait Until Element Is Visible   ${btn_close}        
    Click Element                   ${btn_close}
    Wait Until Element Is Visible   ${icn_budget}
    Click Element                   ${icn_budget}
    Wait Until Element Is Visible   xpath=//div[@id="navbarCollapse"]/ul/li[@class="active"]/a[text()=" งบประมาณ"]
    Wait Until Element Is Visible   xpath=//*[@id="block-system-main"]/div/div[1]/div/div[1]/div[3]/div[1]//button[@id="bb-year-button"]
    Click Element                   xpath=//*[@id="block-system-main"]/div/div[1]/div/div[1]/div[3]/div[1]//button[@id="bb-year-button"]
    Wait Until Element Is Visible   xpath=//ul[@id="bb-year-dropdown"]/li[text()="2566"]
    Click Element                   xpath=//ul[@id="bb-year-dropdown"]/li[text()="2566"]
    Wait Until Element Is Visible   xpath=//div[@id="bb-5-group-by-year"]//span[text()="ปีงบประมาณ พ.ศ. 2566"]
    Wait Until Element Is Visible   xpath=//div[@id="bb-compare-5-group"]//span[text()="เปรียบเทียบงบประมาณ"]

Verify Procurement Page
    Open Browser                    ${url}          chrome
    Wait Until Element Is Visible   ${btn_close}        
    Click Element                   ${btn_close}
    Wait Until Element Is Visible   ${icn_procurement}
    Click Element                   ${icn_procurement}
    Wait Until Element Is Visible   xpath=//h1[text()=" จัดซื้อจัดจ้าง"]
    Wait Until Element Is Visible   xpath=//h2[text()="งบประมาณจัดซื้อจัดจ้าง"]//..//div[@id="totalbudget"]/span[text()="447,882.98"]
    Wait Until Element Is Visible   xpath=//h2[text()="มูลค่าโครงการรวม"]//..//div[@id="totalused"]/span[text()="421,013.36"]
    Wait Until Element Is Visible   xpath=//h2[text()="จำนวนโครงการรวม"]//..//div[@id="total"]/span[text()="2,635,114"]