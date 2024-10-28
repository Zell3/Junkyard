*** Settings ***
Library    Selenium2Library
Library    RPA.Tables
Library    RPA.Excel.Files
Library    OperatingSystem
Library    random
Library    String
Library    BuiltIn
Library    Collections
Library    ScreenCapLibrary   
Library    DateTime

# Variables   
Variables    Resources/Variables/common_config.yaml

# Locators
Resource    Resources/Locators/Login.robot
Resource    Resources/Locators/AddUser.robot

# Keywords
Resource    Resources/Keywords/common.robot
Resource    Resources/Keywords/PrepareData.robot
Resource    Resources/Keywords/AddUser.robot