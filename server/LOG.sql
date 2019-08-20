SET NAMES UTF8;
DROP DATABASE IF EXISTS gol;
CREATE DATABASE gol CHARSET=UTF8;
USE gol;


   /**用户**/
CREATE TABLE gol_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(20),  #用户名
   upwd  VARCHAR(20),  #密码
   phone VARCHAR(16),  #手机
   genter   INT(1)        #性别
);


/*****数据导入*****/

/**用户**/
INSERT INTO gol_user VALUES
(1,'didadida','123456','13412345678','1');

