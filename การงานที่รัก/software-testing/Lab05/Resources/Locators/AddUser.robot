*** Variables ***
${ums_menu}                     xpath=//h2[text()="ผู้ดูแลระบบ"]/following::div[contains(@class, 'panel-body')]
${ums_menu_user}                xpath=//a[text()="ข้อมูลผู้ใช้"]
${ums_user_list}                xpath=//h2[contains(text(), 'ข้อมูลผู้ใช้งานระบบ - กำหนดสิทธิ์')]/following::div[contains(@class, 'panel-body')]
${ums_user_add}                 xpath=//h2[contains(text(), 'เพิ่มข้อมูลผู้ใช้งาน')]/following::div[contains(@class, 'panel-body')]
${ums_user_list_table}          xpath=//*[@id="example"]/tbody/tr
${ums_ult_next_active}          xpath=//li[@class="next"]/a
${ums_ult_next_disable}         xpath=//li[@class="next disabled"]/a

${ums_add_user_id}              xpath=//*[@id="UsPsCode"]
${ums_add_user_name}            xpath=//*[@id="UsName"]
${ums_add_user_wg}              xpath=//*[@id="UsWgID"]
${ums_add_user_username}        xpath=//*[@id="UsLogin"]
${ums_add_user_password}        xpath=//*[@id="UsPassword"]
${ums_add_user_dp}              xpath=//*[@id="UsDpID"]
${ums_add_user_qs}              xpath=//*[@id="UsQsID"]
${ums_add_user_answer}          xpath=//*[@id="UsAnswer"]
${ums_add_user_email}           xpath=//*[@id="UsEmail"]
${ums_add_user_desc}            xpath=//textarea[@id="UsDesc"]
${ums_add_user_active}          xpath=//*[@id="UsActive"]
${ums_add_user_admin}           xpath=//*[@id="UsAdmin"]

${ums_add_user_submit}          xpath=//*[@id="submit"]

${ums_del_user_popup}           xpath=//div[text()="คุณต้องการลบหรือไม่?"]
${ums_del_user_popup_cf_btn}    xpath=//button[@data-bb-handler='confirm' and text()="OK"]
