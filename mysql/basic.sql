#주석처리
-- 주석처리 (--뒤에 한칸 띄움

-- 1. 데이터베이스 만들기
create database member;

use member;

-- 데이터베이스 지우기
drop database green;

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