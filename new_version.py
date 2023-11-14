import json

# 读取package.json文件
with open('package.json', 'r') as file:
    data = json.load(file)

# 解析version字段
version = data['version']
major, minor, patch = map(int, version.split('.'))

# 递增version
patch += 1
new_version = f'{major}.{minor}.{patch}'

# 更新package.json中的version字段
data['version'] = new_version

# 将修改后的数据写回package.json文件
with open('package.json', 'w') as file:
    json.dump(data, file, indent=2)

print(f'版本号已更新为 {new_version}')