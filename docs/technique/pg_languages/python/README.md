# Python

```
first:
install pyenv and install pyenv-virtualenv

local environment:
pyenv local $version
```

## change to a version which is support pip
```
pyenv local 3.13.3
```

## VS Code extensions
```
Python
Python Extension Pack
```

## Training AI may require installing plugins
> https://www.codecademy.com/article/install-jupyter-notebook-on-mac-and-windows#heading-installing-jupyter-notebook-using-miniconda-on-windows
> https://hackmd.io/@liuutin9/HkT_Tz6QT

```
pip install pandas
pip install "numpy==1.26.4" # 因為TensorFlow支援的版本問題
pip install scikit-learn
pip install matplotlib
pip install seaborn
pip install nltk
pip install beautifulsoup4
pip install "opencv-python>=4.8.0,<4.10.0" # 因為TensorFlow支援的版本問題
pip install plotly

pip install openai
```
#### numpy version issue
```
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
tensorflow 2.16.2 requires numpy<2.0.0,>=1.26.0; python_version >= "3.12", but you have numpy 2.2.6 which is incompatible.

Fix:
pip install "numpy==1.26.4"
pip install "tensorflow-macos==2.16.2"
pip install "opencv-python>=4.8.0,<4.10.0"
```


## TensorFlow plugin
> https://hackmd.io/@yenlung/mac-tensorflow
```
pip install tensorflow            # 純用ＣＰＵ
pip install tensorflow[and-cuda]  # 有 NVIDIA GPU 用這個
pip install tensorflow-macos      # tensorflow-macos：為 macOS + ARM 架構編譯的 TensorFlow 版本。
pip install tensorflow-metal      # tensorflow-metal：啟用 Apple GPU（M1/M2）的 Metal 後端加速。
```
#### Test GPU in TensorFlow
```
import tensorflow as tf
print(tf.__version__)
print("Num GPUs Available: ", len(tf.config.list_physical_devices("GPU")))
``` 

## Jupyter
```
pip install ipykernel jupyter
```


## load data
```
# from google drive
from google.colab import drive
drive.mount('/content/drive')
data = pd.read_csv('/content/drive/MyDrive/TFkeras/kc_house_data.csv')

# from csv
csv_path = "URL or path"
data = pd.read_csv(csv_path)
# df = pd.read_csv(csv_path, encoding='big5', index_col=False)
df.columns
df.head

```