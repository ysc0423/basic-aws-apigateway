import json

def lambda_handler(event, context):

    return {
        "statusCode": 200,
        'headers': {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "message": "hello world",
        }),
    }
