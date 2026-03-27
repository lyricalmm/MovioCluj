import csv

with open('forms.csv', 'r', encoding='utf-8') as f:
    reader = list(csv.reader(f))

data = reader[1:] # skip header
total = len(data)

utcn = sum(1 for row in data if 'UTCN' in row[2])
ubb = sum(1 for row in data if 'UBB' in row[2])
usamv = sum(1 for row in data if 'USAMV' in row[2])

utility_4_5 = sum(1 for row in data if row[10] in ['4', '5'])
utility_percent = (utility_4_5 / total) * 100

emails = sum(1 for row in data if '@' in row[11])

use_nearby = sum(1 for row in data if 'Da' in row[6] or 'ocazional' in row[6].lower())
use_nearby_percent = (use_nearby / total) * 100

weekly_daily = sum(1 for row in data if 'zilnic' in row[6].lower() or 'săpt' in row[6].lower() or 'sapt' in row[6].lower())
weekly_daily_percent = (weekly_daily / total) * 100

print(f"Total: {total}")
print(f"UTCN: {utcn}")
print(f"UBB: {ubb}")
print(f"USAMV: {usamv}")
print(f"Rated 4 or 5: {utility_percent:.1f}%")
print(f"Waitlist Emails: {emails}")
print(f"Use if nearby: {use_nearby_percent:.1f}%")
print(f"Weekly or daily: {weekly_daily_percent:.1f}%")
