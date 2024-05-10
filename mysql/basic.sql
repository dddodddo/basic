#주석처리
-- 주석처리 (--뒤에 한칸 띄움

-- 1. 데이터베이스 만들기
create database member;

-- 데이터베이스 사용하기
use member;

-- 데이터베이스 지우기
drop database member;

-- 2. 테이블 만들기
CREATE TABLE member_table(
seq INT Not Null AUTO_INCREMENT, -- 정수 + 비워두지 말기 + 자동으로 1씩 증가
mb_id VARCHAR(20) not null UNIQUE, -- 비워두지 말기 + 유일한 이름
mb_pw VARCHAR(50) not null, -- 비워두지 말기
mb_name VARCHAR(10) not null, -- 비워두지 말기
abbress VARCHAR(100),
phone1 VARCHAR(3),
phone2 VARCHAR(10),
height int,
salary int,
month int,
PRIMARY KEY(seq) -- 데이터베이스끼리 연결할 때 사용되는 수단
);

-- 테이블 삭제
drop table member_table;

select * from member_table;

-- 데이터 입력
INSERT INTO member.member_table VALUES(NULL,"240510_1","12345","박도현","부산시 진구 부전동 221-1","051","11111111",163,3200000,3);
INSERT INTO member.member_table VALUES(NULL,"240510_2","67890","박이번","경상북도 영주시 부석면 영부로120번길 59","054","22223333",165,300000,12);

INSERT INTO member.member_table VALUES(NULL,"240510_1","12345","박도현","부산시 진구 부전동 221-1","051","11111111",163,3200000,3),
                                      (NULL,"240510_2","67890","박이번","경상북도 영주시 부석면 영부로120번길 59","054","22223333",165,300000,12);









