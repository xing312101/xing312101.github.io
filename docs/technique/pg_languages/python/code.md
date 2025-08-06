# Code Notes

## Encapsulation: public, protect, private
Python沒有真正的封裝
要取private的值的方法 obj._ClassName__AttrName
```
class Person:
    def __init__(self):
        self.__private_id = 123

p1 = Person()
print(p1._Person__private_id)

```

## check is some types
```
isinstance(bmi, (float, int)) 

bmi_str =  f"{bmi:6.2f}" if isinstance(bmi, (float, int)) else f"{bmi:>6}"
```

## run commnad 
程式碼加上 ! 就會跑command 指令
```
!nvidia-smi
```

## different in (1) and (1,)
要注意（1) 只是個數字 跟 (1,)不一樣， (1,) 是個tuple 