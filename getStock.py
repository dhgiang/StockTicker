__author__ = 'dhgiang'

from googlefinance import getQuotes
import json

def stock_info(symbol):
    return getQuotes(symbol)

json_object = stock_info("goog,msft,aapl")
print json_object[0]['Index']
print json.dumps(json_object, indent=2)
