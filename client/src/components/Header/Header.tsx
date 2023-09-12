import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Stack,
  IconButton,
  Tooltip
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUser } from '../../redux/slices/user';
interface HeaderProp {
  invisiblePath?: boolean;
}
export default function Header(props: HeaderProp) {
  const navigate = useNavigate();

  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(
      setUser({
        email: '',
        username: '',
        userId: 0,
        nickname: '',
        point: 0,
        memberStatus: false
      })
    );
  };

  function handleNavigate(page: string) {
    if (userInfo.memberStatus) {
      navigate(page);
    } else {
      alert('로그인 후 이용해주세요.');
    }
  }

  return (
    <AppBar
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: alpha('#f5f7fa', 0.8),
        boxShadow: 'none',
        position: props.invisiblePath ? 'sticky' : 'fixed',
        height: '70px'
      }}
    >
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: props.invisiblePath ? 'flex-end' : 'space-between',
            width: '100%',
            paddingRight: props.invisiblePath ? '15px' : null
          }}
        >
          {props.invisiblePath ? null : (
            <Link to="/">
              <img src="./images/main-logo.png" alt="Main Logo" />
            </Link>
          )}

          <Stack direction={'row'} spacing={1}>
            <Tooltip title="단어장">
              <IconButton
                onClick={() => handleNavigate('/my-word')}
                sx={{
                  width: '40px',
                  height: '40px',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
                  color: userInfo.memberStatus ? 'primary.main' : 'default'
                }}
              >
                <ClassOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="학습 기록">
              <IconButton
                onClick={() => handleNavigate('/my-record')}
                sx={{
                  width: '40px',
                  height: '40px',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
                  color: userInfo.memberStatus ? 'primary.main' : 'default'
                }}
              >
                <FactCheckOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="내 정보">
              <IconButton
                onClick={() => handleNavigate('/my-profile')}
                sx={{
                  width: '40px',
                  height: '40px',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
                  color: userInfo.memberStatus ? 'primary.main' : 'default'
                }}
              >
                <PersonOutlineOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            {userInfo.memberStatus ? (
              <Tooltip title="로그아웃">
                <IconButton
                  onClick={handleLogout}
                  sx={{
                    width: '40px',
                    height: '40px',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
                    color: 'default'
                  }}
                >
                  <LogoutOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            ) : (
              <Link to="/signin">
                <Tooltip title="로그인">
                  <IconButton
                    sx={{
                      width: '40px',
                      height: '40px',
                      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
                      color: 'primary.main'
                    }}
                  >
                    <LoginOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Link>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
