from OAuth2 import *
import re
import json


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
    print new_deck_id
    return new_deck_id



def new_push(push_data):
    deck_id = push_data.body[1]
    body = push.push_data[0]
    print deck_id
    print body
    deck = slides.presentations().get(presentationId=deck_id, fields='slides').execute().get('slides', [])
    print deck
    obj = None

    for obj in deck:
        if 'pageElements' in obj:
            print "Slide Found"

    description = 'When a video starts playing either in a video player or on a video details page, the following code should fire:'
    title = "Video Engagement"
    push = """
    dataLayer.push({
        'event': 'video-engagement',
        'videoAction': 'play',
        'videoLength': <video length>,
        'mediaId': '<media id>',
        'mediaType': 'video',
        'videoPercent': '<percent played>',
        'mediaTier1': '<show title>',
        'mediaTier2': '<season name>',
        'mediaTier3': '<episode title>',
        'franchise': '<franchise>'
    });
    """

    reqs = [
    {'replaceAllText': {'replaceText': push, 'containsText': {'text': '{{DL - PUSH}}', 'matchCase': True}}},
    {'replaceAllText': {'replaceText': description, 'containsText': {'text': '{{Push - Description}}', 'matchCase': True}}},
    {'replaceAllText': {'replaceText': title, 'containsText': {'text': '{{Title - Here}}', 'matchCase': True}}}
    ]


    slides.presentations().batchUpdate(body={'requests':reqs},presentationId=deck_id, fields="").execute();

    print "Values Overwritten"
    return "Values Overwritten"

def add_slide(deck_id):
    deck = slides.presentations().get(presentationId=deck_id, fields='slides').execute().get('slides', [])
    print deck[0]['slideProperties']
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
