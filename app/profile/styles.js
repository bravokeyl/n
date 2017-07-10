import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const NStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcfc"
  },
  topHeader: {
    flexDirection: 'row',
    backgroundColor: '#f5511e',
    height: 48,
    alignItems: 'center',
    paddingLeft: 16,
  },
  topHeaderText: {
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 16,
    fontSize: 16,
    lineHeight: 16,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  info: {
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    flexDirection: 'row',
  },
  avatarWrap: {
    width: 64,
    justifyContent: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  accountInfo: {
    flex: 1,
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
  },
  email: {
    color: '#333'
  },
  role: {
    color: '#333'
  },
  subHeader: {
    margin: 16,
    marginBottom: 0,
    fontSize: 12,
  },
  listContainer: {
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  listItem: {
    // bodrerBottomWidth: 0,
    paddingTop: 8,
    paddingBottom: 8,
    // borderBottomWidth: 1,
    borderColor: '#eee',
  },
  signout: {
    textAlign:'center',
    color: '#f5511e',
  }
});

export default NStyles;
