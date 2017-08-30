import requests
import re
import json

req = requests.get('https://maps.amsterdam.nl/_php/haal_objecten.php?TABEL=SPORT_OPENBAAR&SELECT=VOETBAL&SELECTIEKOLOM=SELECTIE&THEMA=sport&TAAL=en&BEHEER=0&NIEUW=niet&1504120565951')
data = req.json()

def parse_details(details):
    result = {}
    lines = details.split('\n')
    for line in lines:
        if len(line) < 5:
            break
        field = re.match(r'<tr><td class=\'veld\'>(.*?)</td>', line).group(1)
        if field == '&nbsp;':
            field = 'image'
            value = re.match(r'.*src=\'(.*?)\'', line).group(1)
        else:
            value = re.match(r'.*<td class=\'waarde\'>(.*?)</td>', line).group(1)
        result[str(field)] = value
    return result

for spot in data:
    req = requests.get('https://maps.amsterdam.nl/_php/haal_info.php?VOLGNR=%s&THEMA=sport&TABEL=SPORT_OPENBAAR' % spot['VOLGNR'])
    spot['details'] = parse_details(req.text)

print(json.dumps(data))
