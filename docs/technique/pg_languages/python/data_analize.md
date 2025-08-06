# 資料分析

## 設定google的表格
```
from google.colab.data_table import DataTable
DataTable.max_columns = 100 # 設定欄位上限
csv_path = 'google文件的url'
df = pd.read_csv(csv_path)
```


## panda
```
import pandas as pd
pd.options.display.max_columns = 25 # 設定顯示上限

path = '...'
df = pd.read_csv(path)
df['您的年齡']
df.loc[0] # 第1筆
df.loc[0,'您的體重'] # 第1筆的'您的體重'

print(type(df))
print(type(df['您的年齡']))
print(type(df.loc[0]))

df.shape # 可以知道表格大小 ex: (88, 30)

```

## plotly
```
import plotly.express as px

def print_df_px(df_data):
  filtered_df = df_data[df_data['您的性別'].isin(['男', '女'])]

  fig = px.scatter(filtered_df, '您的身高', '您的體重', '您的性別', hover_name=filtered_df.index, trendline='ols')
  fig.show()

```