from OAuth2 import *
import re
import json
from string import Template
import pprint
from json2html import *
import time


scope = ['https://www.googleapis.com/auth/presentations', 'https://www.googleapis.com/auth/drive']
master_template = '1JXSKUPtox7wPXRBDU2bcZ7sV1e9jg32Cy3zJwOrwOCY'

#Create an slides service object
slides = GetService('slides', 'v1', scope, 'dl_builder/backend/client_secrets.json')
drive = GetService('drive', 'v3', scope, 'dl_builder/backend/client_secrets.json')


def create_new_deck(slide):
    print slide
    body = {
        'name': slide['name']
    }
    drive_response = drive.files().copy(
        fileId=master_template, body=body).execute()
    new_deck_id = drive_response.get('id')
    master = slides.presentations().get(presentationId=master_template, fields='slides').execute().get('slides', [])
    print master
    return new_deck_id



def add_push(push_data):
    deck_id = push_data['id']
    body = push_data['values']
    deck = slides.presentations().get(presentationId=deck_id, fields='slides').execute().get('slides', [])
    print body
    obj = None

    for obj in deck:
        if 'pageElements' in obj:
            print "Slide Found"

    description = 'When a video starts playing either in a video player or on a video details page, the following code should fire:'
    title = "Video Engagement"
    push = json.dumps(body)

    def test():
        string = ""
        space = "   "
        for key in body:
             string += "\n" + space + "'" + key + "'" + " : " + "'" +  body[key] +  "',"
        string += "\n"
        return string


    output = "dataLayer.push({" + test() + "})"

    print output


    reqs = [
    {'replaceAllText': {'replaceText':  output, 'containsText': {'text': '{{DL - PUSH}}', 'matchCase': True}}},
    {'replaceAllText': {'replaceText': description, 'containsText': {'text': '{{Push - Description}}', 'matchCase': True}}},
    {'replaceAllText': {'replaceText': title, 'containsText': {'text': '{{Title - Here}}', 'matchCase': True}}},
    {'updateTextStyle': {"objectId": "g1827978c15_0_3", 'style': { "foregroundColor": { "opaqueColor": { "rgbColor": { "red": 1, "green": 1, "blue": 1 }}},"bold": False, "italic": False, "fontFamily": "Verdana", "fontSize": { "magnitude": 14, "unit": "PT" }, "link": { "url": "https://analytics.google.com/analytics/web/#report/visitors-overview/a970836w4986072p5137150/" }, "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED", "smallCaps": False, "strikethrough": False, "underline": False}, "fields": "*"}}
    ]
    print "Sending Request"

    test = slides.presentations().batchUpdate(body={'requests':reqs},presentationId=deck_id, fields="").execute();

    kill = False
    while kill == False:
        print "Working Magic"
        print "Updating link to: https://analytics.google.com/analytics/web/#report/visitors-overview/a970836w4986072p5137150/"
        time.sleep(5)
        add_slide(deck_id)
        kill = True

    print "Magic done"
    return "Values Overwritten"

def add_slide(deck_id):
    deck = slides.presentations().get(presentationId="1JXSKUPtox7wPXRBDU2bcZ7sV1e9jg32Cy3zJwOrwOCY", fields='slides').execute().get('slides', [])
    req = [    {
            'createSlide': {
                'objectId': "",
                'insertionIndex': len(deck),
                'slideLayoutReference': {
                    'layoutId': 'g8faaed61_043'
                }
            }
        }]
    new_slide = slides.presentations().batchUpdate(body={'requests':req},presentationId=deck_id, fields="").execute();

def update_url(deck_id):
    deck = slides.presentations().get(presentationId=deck_id, fields='slides').execute().get('slides', [])
    reqs = [
    {'replaceAllText': {'replaceText':  "http://test.com", 'containsText': {'text': 'reserved', 'matchCase': True}}}
    ]
    new_slide = slides.presentations().batchUpdate(body={'requests':req},presentationId=deck_id, fields="").execute();
