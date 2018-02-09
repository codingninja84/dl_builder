import argparse
import sys
import httplib2
from apiclient.discovery import build
from oauth2client import client
from oauth2client import file
from oauth2client import tools

def GetService(api_name, api_version, scope, client_secrets_path):

   # Parser command-line arguments.
    parser = argparse.ArgumentParser(
       formatter_class=argparse.RawDescriptionHelpFormatter,
       parents=[tools.argparser])
    flags = parser.parse_args([])

    # Set up a Flow object to be used if we need to authenticate.
    flow = client.flow_from_clientsecrets(
       client_secrets_path, scope=scope,
       message=tools.message_if_missing(client_secrets_path))

    storage = file.Storage(api_name + '.dat')
    credentials = storage.get()
    try:
        already_has_scopes = all([credentials.has_scopes(s) for s in scope])
    except AttributeError:
        # No prior credentials
        already_has_scopes = False

    if credentials is None or credentials.invalid or not already_has_scopes:
        credentials = tools.run_flow(flow, storage, flags)

    http = credentials.authorize(http=httplib2.Http())

    # Build the service object.
    service = build(api_name, api_version, http=http)

    return service
