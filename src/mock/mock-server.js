
import Mock from 'mockjs';
import homeData from './homeData.json';
import category from './category.json';
Mock.mock('/home', {code: 0, data: homeData});
Mock.mock('/category', {code: 0, data: category});

