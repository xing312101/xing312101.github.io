# Analyze

## 檢查執行時間差異
```
explain analyze select * from one_table_name where xxx='ABC';
create index idx_XXX on one_table(xxx);
explain analyze select * from one_table_name where xxx='ABC';
```

