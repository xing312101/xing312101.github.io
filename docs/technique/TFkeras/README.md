# TFkeras

## 雜七雜八
TF data set 可以用GPU加速
keras vs pytorch

## keras
> https://keras.io/

## kaggle
學習參考

## 資料行列
```
x = tf.constant([[1, 2, 3, 4, 5, 6]])
print(x)
print("{}階Tensor ".format(x.ndim))

# tf.Tensor([[1 2 3 4 5 6]], shape=(1, 6), dtype=int32)
# 一個row 六個column
```

```
x = tf.constant([[1, 2, 3], [4, 5, 6]])
print(x)
print("{}階Tensor ".format(x.ndim))    # 顯示Tensor的維度

# tf.Tensor([[1 2 3] [4 5 6]], shape=(2, 3), dtype=int32)
# 兩個row 三個column
```


## 2D Tensor 的運算，在Eager Execution模式下可以混和 Tensor 和 Numpy 做運算
```
a = tf.constant([[1., 2.], [3., 4.]], dtype=tf.float32)
b = np.array([[1., 0.], [2., 3.]], dtype=np.float32)
print("a constant: {}D Tensor".format(a.ndim))

c = a + b
print(c)
print("a + b = \n{}".format(c))
d = tf.matmul(a, b)  # 跟 a*b 是不一樣的東西
print("a dot b = \n{}".format(d))
e = a*b
print("a * b = \n{}".format(e))
f = tf.multiply(a, b) # 跟 a*b 是一樣的東西
print("a * b = \n{}".format(f))
```

輸出的結果為 Tensor 格式，我們可以將它轉為 Numpy 格式

## tf.GradientTape()
計算Gradient(梯度、斜率、微分)
```
w = tf.Variable([[1.0]])
with tf.GradientTape() as tape:
    loss = w * w

grad = tape.gradient(loss, w)
print(grad)
print(loss)
```

## numpy, pandas 不能用GPU加速
!!!!!

## 基本操作
1. tf.data.Dataset.from_tensors
```
dataset = tf.data.Dataset.from_tensors(tf.constant([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
print(dataset)
```

2. tf.data.Dataset.from_tensor_slices
```
x_data = tf.data.Dataset.from_tensor_slices(tf.constant([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
print(x_data)

y_data = tf.data.Dataset.from_tensor_slices(tf.constant([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]))
print(y_data)
```

3. for loop 讀取數據
```
# from_tensors
for data in dataset:
    print(data)

# from_tensor_slices
for data1, data2 in zip(x_data, y_data): # a list of tuples; http://puremonkey2010.blogspot.com/2015/10/python-python-zip.html
    print(data1, data2)

## python zip
for data1, data2 in zip(x_data, y_data):
    print('x: {}, y: {}'.format(data1, data2))
```

4. take：讀取資料 (dataset的method)
```
for data in dataset.take(1):
    print(data)

for data in dataset.take(2):  #take超過dataset組數,還是只有1組
    print(data)

for data1, data2 in zip(x_data.take(5), y_data.take(5)):
    print('x: {}, y: {}'.format(data1, data2))

for data1, data2 in zip(x_data.take(12), y_data.take(12)):  #take超過data1, data2組數,還是只有10組
    print('x: {}, y: {}'.format(data1, data2))
```

5. tf.data.Dataset.zip # 產生tensor的zip
```
dataset = tf.data.Dataset.zip((x_data, y_data)) # tuple
print(dataset,"\n")
for data in dataset:
    print(data)
```

6. map：使用map來轉換數據
```
tf.data.Dataset.range(10) #tf.data.Dataset.from_tensor_slices(tf.constant([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
tf.data.Dataset.range(10).map(lambda x: x*2) #tf.data.Dataset.from_tensor_slices(tf.constant([0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
```

7. 命名：可以字典方式為elements的組件命名
```
x = tf.data.Dataset.range(10) #tf.data.Dataset.from_tensor_slices(tf.constant([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shape=(10, )))
y = tf.data.Dataset.range(10).map(lambda x: x*2) #tf.data.Dataset.from_tensor_slices(tf.constant([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], shape=(10, )))
print(x)
print(y)
dataset = tf.data.Dataset.zip((x, y)) #tuple
print(dataset)
dataset = tf.data.Dataset.zip({"x": x, "y": y}) #dict
print(dataset)
```

7. 批次取值
```
dataset = tf.data.Dataset.zip({"x": x, "y": y}).batch(2)
print(dataset)

for data in dataset.take(5):
  print(data)
  print('x: {}, y: {}'.format(data['x'], data['y']))
```

8. shuffle 打亂資料
```
dataset = dataset.shuffle(5) # buffer size = 5  #順序打亂
for data in dataset.take(5):
    print('x: {}, y: {}'.format(data['x'], data['y']))

```
不要一次全部資料打亂，ＲＡＭ會不夠，先batch然後shuffle

## import 必要套件
```
import tensorflow as tf
from tensorflow import keras # tf.keras
from tensorflow.keras import layers
```

## Sequential Model

1. Sample Network
```
# 輸入為28x28 (拉平為784的一維向量)的影像，輸出為10 (分為十個類別)
model = keras.Sequential(name='Sequential')
model.add(layers.Dense(64, activation='relu', input_shape=(784,))) # 線性輸入 非線性輸出
model.add(layers.Dense(64, activation='relu')) # 第二次 線性輸入 非線性輸出
model.add(layers.Dense(10, activation='softmax'))  # output layer # 最後輸出
```

### Single input model: 單輸入單輸出模型
```
inputs = keras.Input(shape=(784,), name='Input')
hidden1 = layers.Dense(64, activation='relu', name='hidden1')(inputs)
hidden2 = layers.Dense(64, activation='relu', name='hidden2')(hidden1)
outputs = layers.Dense(10, activation='softmax', name='Output')(hidden2)

model = keras.Model(inputs=inputs, outputs=outputs)
```

### Multi Input Model: 多輸入單輸出模型
```
img_input = keras.Input(shape=(28, 28, 1), name='Image_Input')
info_input = keras.Input(shape=(1, ), name='Information_Input')

hidden1_1 = layers.Conv2D(64, kernel_size=5, strides=2, activation='relu', name='hidden1_1')(img_input)
hidden1_2 = layers.Conv2D(32, kernel_size=5, strides=2, activation='relu', name='hidden1_2')(hidden1_1)
hidden1_2_ft= layers.Flatten()(hidden1_2)

hidden1_3 = layers.Dense(64, activation='relu', name='hidden1_3')(info_input)

concat = layers.Concatenate()([hidden1_2_ft, hidden1_3])
hidden2 = layers.Dense(64, activation='relu', name='hidden2')(concat)
outputs = layers.Dense(1, name='Output')(hidden2)

model = keras.Model(inputs=[img_input, info_input], outputs=outputs)
```

### Multi Output Network: 單輸入多輸出模型
```
inputs = keras.Input(shape=(28, 28, 1), name='Input')

hidden1 = layers.Conv2D(64, kernel_size=3, activation='relu', name='hidden1')(inputs)
hidden2 = layers.Conv2D(64, kernel_size=3, strides=2, activation='relu', name='hidden2')(hidden1)
hidden3 = layers.Conv2D(64, kernel_size=3, strides=2, activation='relu', name='hidden3')(hidden2)
flatten = layers.Flatten()(hidden3)

age_output = layers.Dense(1, name='Age_Output')(flatten)
gender_output = layers.Dense(1, name='Gender_Output')(flatten)

model = keras.Model(inputs=inputs, outputs=[age_output, gender_output])

```

### Multi Input and Multi Output Network
```
image_inputs = keras.Input(shape=(28, 28, 1), name='Image_Input')
hidden1 = layers.Conv2D(64, kernel_size=3, activation='relu', name='hidden1')(image_inputs)
hidden2 = layers.Conv2D(64, kernel_size=3, strides=2, activation='relu', name='hidden2')(hidden1)
hidden3 = layers.Conv2D(64, kernel_size=3, strides=2, activation='relu', name='hidden3')(hidden2)
flatten = layers.Flatten()(hidden3)

info_inputs = keras.Input(shape=(10, ), name='Info_Input')
hidden4 = layers.Dense(64)(info_inputs)

concat = layers.Concatenate()([flatten, hidden4])

weather_outputs = layers.Dense(1, name='Output1')(concat)
temp_outputs = layers.Dense(1, name='Output2')(concat)
humidity_outputs = layers.Dense(1, name='Output3')(concat)

model = keras.Model(inputs=[image_inputs, info_inputs],
                    outputs=[weather_outputs, temp_outputs, humidity_outputs])
```


