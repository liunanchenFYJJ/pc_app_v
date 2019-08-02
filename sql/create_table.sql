-- 删除数据表
DROP TABLE t_test;
-- 创建数据表
CREATE TABLE t_test (
    id INT(11),
    name VARCHAR(20),
    password VARCHAR(20),
    gender enum('male', 'female', 'secret')
);

-- 查看所有数据表
show tables;

-- 数据表重命名
ALTER TABLE test RENAME t_test;

-- 查看数据表结构
DESCRIBE t_test;

-- 添加/删除字段
ALTER TABLE t_test ADD address VARCHAR(40);
ALTER TABLE t_test DROP address;

-- 修改字段名
ALTER TABLE t_test CHANGE name username VARCHAR(20);

-- 修改字段属性
ALTER TABLE t_test MODIFY username VARCHAR(40);

-- 增
INSERT INTO t_test (
    id, username, password, gender
) VALUES(
    3, 'jolin', '123456', 'female'
)

-- 查
SELECT * FROM t_test;
SELECT username AS "名字" FROM t_test;
SELECT COUNT(username) from t_test;
SELECT  gender AS "性别", COUNT(id) AS "统计" FROM t_test GROUP BY gender;
SELECT gender FROM t_test Group BY gender HAVING COUNT(gender) < 2;

-- 删
DELETE FROM t_test WHERE gender = '';

-- 改
UPDATE t_test SET username='jj' WHERE id = 1;
