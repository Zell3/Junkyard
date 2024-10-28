*** Settings ***
Library         Selenium2Library
Test Teardown   Close Browser

*** Variables ***
#Locator
${btn_close}                xpath=//div[@id='whats-new-modal']//button[@class='close']
${lab_title}                xpath=//div[@id="first-title"] 
${lab_filter}               xpath=//div[@class="filter-element" and text()="2567"]
${table_budget}             xpath=//table[@id="budget-data-table"]/tbody/tr

#Value                  
${wait_state_timeout}       5s
${url}                      https://govspending.data.go.th/
${url_Procurement}          https://govspending.data.go.th/budget?year=2567 

*** Test Cases ***
Verify Home Page
    Open Browser            ${url}                              chrome
    ${Status}               Run Keyword And Return Status       Wait Until Element Is Visible   ${btn_close}    
    Wait Until Element Is Visible            ${lab_title}      15s     Failed, Application Can't Be Displayed
    IF    ${Status} == True
        Click Element    ${btn_close}
    ELSE
        log        No pop-up show in this page
    END

Search for procurement projects
    Open Browser                    ${url_Procurement}      chrome
    Wait Until Element Is Visible   ${lab_filter}           15s         Failed, Application Can't Be Displayed
    ${rows} =                        Get Element Count       ${table_budget} 
    FOR    ${index}    IN RANGE    1    ${rows}
        @{cells} =    Get WebElements    xpath=//table[@id="budget-data-table"]/tbody/tr[contains(@class,"budgetrow")][${index}]/td
        ${Department}=  Get Element Attribute   ${cells}[1]   innerText
        ${Project}=     Get Element Attribute  ${cells}[2]    innerText
        ${budget}=      Get Element Attribute  ${cells}[3]    innerText
        ${date}=        Get Element Attribute  ${cells}[4]    innerText
        IF     '${Department}' == "สำนักงานตำรวจแห่งชาติ"
            log      ชื่อหน่วยจัดซื้อ ${Department} | ชื่อโครงการ ${Project} | วงเงินงบประมาณ ${budget} | วันที่ลงนามในสัญญา${date}
        END
    END

Income from self-storage 2022 compared to 2021
    Open Browser                                https://govspending.data.go.th/dashboard/7      chrome
    Wait Until Element Is Visible               //h2[text()="รายได้จากการจัดเก็บเอง "]          15s         Failed, Application Can't Be Displayed
    Scroll Element Into View                    //h2[text()="10 จังหวัดที่มีรายได้รวมสูงที่สุด"]
    @{xaxis} =          Get WebElements         //*[local-name()="g" and @class="highcharts-axis-labels highcharts-xaxis-labels"]//*[local-name()="text"]
    # loop
    # ${Department}=      Get Text    locator
    FOR    ${element}    IN    @{xaxis}
        ${Department}=    Get Text    ${element}
        Log    ${Department}
    END
