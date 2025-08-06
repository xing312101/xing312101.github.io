# Database、SQL

## DBeaver
> https://dbeaver.io/

## windows function
```
ROW_NUMBER() OVER (ORDER BY joindate) — 排名或排序用
SUM(amount) OVER (PARTITION BY customer_id ORDER BY date) — 累積加總
AVG(score) OVER (PARTITION BY class) — 平均數計算（分組）
COUNT(*) OVER () - 計數全部數量

# 列出名字同時每筆資料都附上users的數量
SELECT COUNT(*) OVER() as total, users.name
FROM users
# 找出合計最高的一筆
select facid, total 
from (
    select facid,
    sum(slots) as total,
    rank() over (order by sum(slots)desc) rank
    from cd.bookings
    group by facid
) 
where rank = 1

#
select 
    m.firstname,
    m.surname,
    round(sum(b.slots) * 0.5, -1) as hours,
    rank() over(order by round(sum(b.slots) * 0.5, -1) desc) as rank
from cd.members m
inner join cd.bookings b on m.memid = b.memid
group by m.memid
order by rank, m.surname, m.firstname;

```

## sql select 串接 concat
```
MySQL: CONCAT( )
Oracle: CONCAT( ), ||
SQL Server: +
```

## group rownumber
```
WITH
USER_SCOPE AS (
	SELECT ROW_NUMBER() OVER (PARTITION BY NAME ORDER BY AGE DESC) AS RANK_NO, *
	FROM USERS
),
YANGEST_USERS AS (
	SELECT * FROM USER_SCOPE WHERE RANK_NO = 1
),
```

## group concat in db2
```
SELECT
		ITEM.ITEMNUM,
		LISTAGG(DISTINCT BAND_ITEMS.VENDOR,',')  WITHIN GROUP(ORDER BY VENDOR ASC)  AS BRAND_NAMES
	FROM
		ITEM
	INNER JOIN BAND_ITEMS ON
		ITEM.ITEMNUM = BAND_ITEMS.ITEMNUM
	GROUP BY
		ITEM.ITEMNUM;
```

## Next id value in db2
> https://www.ibm.com/docs/en/db2/11.5?topic=expressions-sequence-reference
```
QQ: does not work.
   INSERT INTO order(orderno, custno)
     VALUES (NEXT VALUE FOR order_seq, 123456);
or
   UPDATE order
     SET orderno = NEXT VALUE FOR order_seq
     WHERE custno = 123456;
or
   VALUES NEXT VALUE FOR order_seq INTO :hv_seq;
```
```
-- it can work
INSERT INTO table(TABLE_ID, value)
     VALUES (TABLE_IDSEQ.nextval, 'HelloWorld');
```