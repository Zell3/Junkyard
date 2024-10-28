*** Settings ***
# lib				----------------   
Library             RequestsLibrary
Library             Collections
Library             JsonValidator
Library             JSONLibrary
Library             Process
Library             OperatingSystem

# Variables			----------------      
Variables           Resources/Variables/common_config.yaml

# Keywords			----------------   
Resource            Resources/Keywords/common.robot