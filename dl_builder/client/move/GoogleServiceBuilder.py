# import argparse
# import sys
# import json
#
# import httplib2
#
# from apiclient.discovery import build
# from oauth2client import client
# from oauth2client import file
# from oauth2client import tools
# from oauth2client.service_account import ServiceAccountCredentials
#
#
# def get_client_service(api_name, api_version, scope, client_secrets_path):
#     """Client secrets file based service to communicate with a Google API.
#
#     Args:
#     api_name: string The name of the api to connect to.
#     api_version: string The api version to connect to.
#     scope: A list of strings representing the auth scopes to authorize for the
#       connection.
#     client_secrets_path: string A path to a valid client secrets file.
#
#     Returns:
#     A service that is connected to the specified API.
#     """
#     # Parser command-line arguments.
#     parser = argparse.ArgumentParser(
#         formatter_class=argparse.RawDescriptionHelpFormatter,
#         parents=[tools.argparser])
#     flags = parser.parse_args([])
#
#     # Set up a Flow object to be used if we need to authenticate.
#     flow = client.flow_from_clientsecrets(
#         client_secrets_path, scope=scope,
#         message=tools.message_if_missing(client_secrets_path)
#     )
#
#     # Prepare credentials, and authorize HTTP object with them.
#     # If the credentials don't exist or are invalid run through the native
#     # client flow. The Storage object will ensure that if successful the good
#     # credentials will get written back to a file.
#     storage = file.Storage(api_name + '.dat')
#     credentials = storage.get()
#     try:
#         already_has_scopes = all([credentials.has_scopes(s) for s in scope])
#     except AttributeError:
#         # No prior credentials
#         already_has_scopes = False
#
#     if credentials is None or credentials.invalid or not already_has_scopes:
#         credentials = tools.run_flow(flow, storage, flags)
#
#     http = credentials.authorize(http=httplib2.Http())
#
#     # Build the service object.
#     service = build(api_name, api_version, http=http)
#
#     return service
#
# def get_s2s_service(api_name, api_version, scope,
#                     file_path):
#     """JSON key based server-to-server communication with a Google API.
#
#     Args:
#     api_name: string The name of the api to connect to.
#     api_version: string The api version to connect to.
#     scope: A list of strings representing the auth scopes to authorize for
#         the connection.
#     file_path: string A path to a valid JSON key.
#     """
#     credentials = ServiceAccountCredentials.from_json_keyfile_name(file_path, scope)
#
#     http_auth = credentials.authorize(httplib2.Http())
#
#     service = build(api_name, api_version, http=http_auth)
#     return service
#
#
# def get_s2s_service_p12(api_name, api_version, scope, client_email,
#                     file_path, password):
#     """p12 key based server-to-server communication with a Google API.
#
#     Args:
#     api_name: string The name of the api to connect to.
#     api_version: string The api version to connect to.
#     scope: A list of strings representing the auth scopes to authorize for
#         the connection.
#     client_email: email associated with the .p12 file key
#     file_path: string A path to a valid .p12 key.
#     """
#
#     credentials = ServiceAccountCredentials.from_p12_keyfile(client_email, file_path, password, scope)
#
#     http_auth = credentials.authorize(httplib2.Http())
#
#     service = build(api_name, api_version, http=http_auth)
#     return service
