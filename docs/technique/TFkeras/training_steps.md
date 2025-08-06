# 神經網路訓練步驟

1. Training data: input X, Y
2. 決定Model: DNN, CNN, RNN
3. Loss function: MSE, MAE
4. Optimizer: reference(keras.io/api/optimizers)
5. 驗證資料及測試
6. 評估指標
7. 超參數


## 全部資料分三份
1. Training data
2. Validation data
3. Testing data

```
data_num = data.shape[0]
# 取得一筆與data數量相同的亂數索引，主要目的是用於打散資料
indexes = np.random.permutation(data_num)
# 並將亂數索引值分為Train、validation和test分為，這裡的劃分比例為6:2:2
train_indexes = indexes[:int(data_num *0.6)]
val_indexes = indexes[int(data_num *0.6):int(data_num *0.8)]
test_indexes = indexes[int(data_num *0.8):]
# 透過索引值從data取出訓練資料、驗證資料和測試資料
train_data = data.loc[train_indexes] # data.iloc[:50] 前50筆 data.loc[np.array([1, 5, 10])]
val_data = data.loc[val_indexes]
test_data = data.loc[test_indexes]
```

## Normalization 正規化
```
train_validation_data = pd.concat([train_data, val_data])
mean = train_validation_data.mean() # shape: (1, 25)
std = train_validation_data.std()

train_data = (train_data - mean) / std # column
val_data = (val_data - mean) / std
```
！！！！ 測試資料也要正規化，使用的平均值跟標準差要用training data跟 validation data的平均值跟標準差

## 建立data frame格式的訓練數據
```
x_train = train_data.drop('price', axis='columns')
y_train = train_data['price']
x_val = val_data.drop('price', axis='columns')
y_val = val_data['price']
```

## 建立並訓練網路模型
```
# 建立一個Sequential型態的model
model = keras.Sequential(name='model-1')
# 第1層全連接層設為64個unit，將輸入形狀設定為(21, )，而實際上我們輸入的數據形狀為(batch_size, 21)
model.add(layers.Dense(64, activation='relu', input_shape=(21,)))  #  activation 是啟動函數，是最重要的部分 沒寫等於在做線性函數
# 第2層全連接層設為64個unit
model.add(layers.Dense(64, activation='relu'))
# 最後一層全連接層設為1個unit
model.add(layers.Dense(1))
# 顯示網路模型架構
model.summary()

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┓
┃ Layer (type)                    ┃ Output Shape           ┃       Param # ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━┩
│ dense (Dense)                   │ (None, 64)             │         1,408 │
├─────────────────────────────────┼────────────────────────┼───────────────┤
│ dense_1 (Dense)                 │ (None, 64)             │         4,160 │
├─────────────────────────────────┼────────────────────────┼───────────────┤
│ dense_2 (Dense)                 │ (None, 1)              │            65 │
└─────────────────────────────────┴────────────────────────┴───────────────┘
```

## 設定訓練使用的優化器、損失函數和指標函數：
```
model.compile(keras.optimizers.Adam(0.001),
              loss=keras.losses.MeanSquaredError(),
              metrics=[keras.metrics.MeanAbsoluteError()])
```

## 創建模型儲存目錄：
```
model_dir = 'lab1-logs/models/'
os.makedirs(model_dir)
```

## 設定回調函數：
```
# TensorBoard回調函數會幫忙紀錄訓練資訊，並存成TensorBoard的紀錄檔
log_dir = os.path.join('lab1-logs', 'model-1') # 'lab1-logs/model-1'
model_cbk = keras.callbacks.TensorBoard(log_dir=log_dir)
# ModelCheckpoint回調函數幫忙儲存網路模型，可以設定只儲存最好的模型，「monitor」表示被監測的數據，「mode」min則代表監測數據越小越好。
model_mckp = keras.callbacks.ModelCheckpoint(model_dir + '/Best-model-1.keras',
                                        monitor='val_mean_absolute_error',
                                        save_best_only=True,
                                        mode='min')
```

## 訓練網路模型：
```
history = model.fit(x_train, y_train,  # 傳入訓練數據
               batch_size=64,  # 批次大小設為64
               epochs=100,  # 整個dataset訓練100遍
               validation_data=(x_val, y_val),  # 驗證數據
               callbacks=[model_cbk, model_mckp])  # Tensorboard回調函數紀錄訓練過程，ModelCheckpoint回調函數儲存最好的模型
```

## 訓練結果
```
history.history.keys()  # 查看history儲存的資訊有哪些 
## => dict_keys(['loss', 'mean_absolute_error', 'val_loss', 'val_mean_absolute_error'])
```

```
plt.plot(history.history['loss'], label='train')
plt.plot(history.history['val_loss'], label='validation')
plt.ylim(0.02, 0.2)
plt.title('Mean square error')
plt.ylabel('loss')
plt.xlabel('epochs')
plt.legend(loc='upper right')

```

```
plt.plot(history.history['mean_absolute_error'], label='train')
plt.plot(history.history['val_mean_absolute_error'], label='validation')
plt.ylim(0.12, 0.26)
plt.title('Mean absolute error')
plt.ylabel('metrics')
plt.xlabel('epochs')
plt.legend(loc='upper right')
```

## 測試數據的誤差百分比：用測試數據預測房屋價格並與答案計算誤差百分比。
```
# 載入模型
model = keras.models.load_model('lab1-logs/models/Best-model-1.keras')
# 先將房屋價格取出
y_test = test_data['price']
print(y_test.shape)
# 標準化數據
test_data = (test_data - mean) / std
# 將輸入數據存成Numpy 格式 # not necessary
x_test = test_data.drop('price', axis='columns') # check shape
# 預測測試數據
y_pred = model.predict(x_test)
print(y_pred.shape)

# 將預測結果轉換回來(因為訓練時的訓練目標也有經過標準化)
y_pred = y_pred * std['price'] + mean['price']
y_pred = y_pred.reshape(y_test.shape)
print(y_pred.shape, y_test.shape)
# 計算平均的誤差百分比
percentage_error = np.mean(np.abs(y_test - y_pred) / y_test) * 100
# 顯示誤差百分比
print("Model_1 Percentage Error: {:.2f}%".format(percentage_error))
```


## fix過擬合問題
1. 減少網路權重(減少神經元)
```
model_2 = keras.Sequential(name='model-2')
model_2.add(layers.Dense(16, activation='relu', input_shape=(21,)))
model_2.add(layers.Dense(16, activation='relu'))
model_2.add(layers.Dense(1))

model_2.compile(keras.optimizers.Adam(0.001),
                loss=keras.losses.MeanSquaredError(),
                metrics=[keras.metrics.MeanAbsoluteError()])

log_dir = os.path.join('lab2-logs', 'model-2')
model_cbk = keras.callbacks.TensorBoard(log_dir=log_dir)
model_mckp = keras.callbacks.ModelCheckpoint(model_dir + '/Best-model-2.keras',
                                             monitor='val_mean_absolute_error',
                                             save_best_only=True,
                                             mode='min')
model_2.fit(x_train, y_train,
            batch_size=64 ,
            epochs=100,
            validation_data=(x_val, y_val),
            callbacks=[model_cbk, model_mckp])

```
#### test model_2
```
model_2 = keras.models.load_model('lab2-logs/models/Best-model-2.keras')
y_pred = model_2.predict(x_test)
y_pred = y_pred * std['price'] + mean['price']
y_pred = y_pred.reshape(y_test.shape)
percentage_error = np.mean(np.abs(y_test - y_pred) / y_test) * 100

print("Model_2: {:.2f}%".format(percentage_error))
```



2. L1或L2 正則化
```
model_3 = keras.Sequential(name='model-3')
model_3.add(layers.Dense(64, kernel_regularizer=keras.regularizers.l2(0.001),
                         activation='relu', input_shape=(21,)))
model_3.add(layers.Dense(64, kernel_regularizer=keras.regularizers.l2(0.001), activation='relu'))
model_3.add(layers.Dense(1))

model_3.compile(keras.optimizers.Adam(0.001),
                loss=keras.losses.MeanSquaredError(),
                metrics=[keras.metrics.MeanAbsoluteError()])

log_dir = os.path.join('lab2-logs', 'model-3')
model_cbk = keras.callbacks.TensorBoard(log_dir=log_dir)
model_mckp = keras.callbacks.ModelCheckpoint(model_dir + '/Best-model-3.keras',
                                             monitor='val_mean_absolute_error',
                                             save_best_only=True,
                                             mode='min')
model_3.fit(x_train, y_train,
            batch_size=64 ,
            epochs=100,
            validation_data=(x_val, y_val),
            callbacks=[model_cbk, model_mckp])
```
#### test model_3
```
model_3 = keras.models.load_model('lab2-logs/models/Best-model-3.keras')
y_pred = model_3.predict(x_test)
y_pred = y_pred * std['price'] + mean['price']
y_pred = y_pred.reshape(y_test.shape)
percentage_error = np.mean(np.abs(y_test - y_pred) / y_test) * 100

print("Model_3: {:.2f}%".format(percentage_error))
```


3. Dropout
```
model_4 = keras.Sequential(name='model-4')
model_4.add(layers.Dense(64, activation='relu', input_shape=(21,)))
model_4.add(layers.Dropout(0.2))
model_4.add(layers.Dense(64, activation='relu'))
model_4.add(layers.Dropout(0.2))
model_4.add(layers.Dense(1))

model_4.compile(keras.optimizers.Adam(0.001),
                loss=keras.losses.MeanSquaredError(),
                metrics=[keras.metrics.MeanAbsoluteError()])

log_dir = os.path.join('lab2-logs', 'model-4')
model_cbk = keras.callbacks.TensorBoard(log_dir=log_dir)
model_mckp = keras.callbacks.ModelCheckpoint(model_dir + '/Best-model-4.keras',
                                             monitor='val_mean_absolute_error',
                                             save_best_only=True,
                                             mode='min')
model_4.fit(x_train, y_train,
            batch_size=64 ,
            epochs=100,
            validation_data=(x_val, y_val),
            callbacks=[model_cbk, model_mckp])
```

#### test model_4
```
model_4 = keras.models.load_model('lab2-logs/models/Best-model-4.keras')
y_pred = model_4.predict(x_test)
y_pred = np.reshape(y_pred * std['price'] + mean['price'], y_test.shape)
percentage_error = np.mean(np.abs(y_test - y_pred) / y_test) * 100

print("Model_4: {:.2f}%".format(percentage_error))
```

## 避免浪費traing的資源
EarlyStopping

```
# 建立一個Sequential型態的model
model = keras.Sequential(name='model-1')
# 第1層全連接層設為64個unit，將輸入形狀設定為(21, )，而實際上我們輸入的數據形狀為(batch_size, 21)
model.add(layers.Dense(64, activation='relu', input_shape=(21,)))
# 第2層全連接層設為64個unit
model.add(layers.Dense(64, activation='relu'))
# 最後一層全連接層設為1個unit
model.add(layers.Dense(1))
# 顯示網路模型架構
model.summary()

```
```
model.compile(keras.optimizers.Adam(0.001),
              loss=keras.losses.MeanSquaredError(),
              metrics=[keras.metrics.MeanAbsoluteError()])

log_dir = os.path.join('lab2-logs', 'model-5')
model_cbk = keras.callbacks.TensorBoard(log_dir=log_dir)
# ModelCheckpoint回調函數幫忙儲存網路模型，可以設定只儲存最好的模型，「monitor」表示被監測的數據，「mode」min則代表監測數據越小越好。
model_mckp = keras.callbacks.ModelCheckpoint(model_dir + '/Best-model-5.keras',
                                        monitor='val_mean_absolute_error',
                                        save_best_only=True,
                                        mode='min')

es = keras.callbacks.EarlyStopping(monitor='val_mean_absolute_error', mode='min', patience=10)

history = model.fit(x_train, y_train,  # 傳入訓練數據
               batch_size=64,  # 批次大小設為64
               epochs=100,  # 整個dataset訓練100遍
               validation_data=(x_val, y_val),  # 驗證數據
               callbacks=[model_cbk, model_mckp, es])  # Tensorboard回調函數紀錄訓練過程，ModelCheckpoint回調函數儲存最好的模型
```