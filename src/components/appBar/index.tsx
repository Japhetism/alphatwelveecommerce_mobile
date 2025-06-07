import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import BellIcon from '../../assets/icons/bell';
import SearchIcon from '../../assets/icons/search';
import LeftArrowIcon from '../../assets/icons/leftArrow';

const AppBar: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.section}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.addressContainer}>
            <Text style={styles.label}>DELIVERY ADDRESS</Text>
            <Text style={styles.address}>Umuezike Road, Oyo State</Text>
          </View>

          <TouchableOpacity style={styles.bellContainer}>
            <BellIcon size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <SearchIcon size={18} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#94A3B8"
          />
        </View>
      </View>
      <View style={styles.breadcrumb}>
        <TouchableOpacity onPress={() => {}}>
          <LeftArrowIcon color="#64748B" size={14} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Technology</Text>
      </View>
    </>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    height: 40,
    borderColor: '#E2E8F0',
    borderWidth: 1,
    paddingLeft: 5,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    fontWeight: 400,
  },
  logo: {
    width: 40,
    height: 40,
  },
  addressContainer: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    color: '#334155',
    fontWeight: 600,
    lineHeight: 28,
  },
  address: {
    fontSize: 12,
    fontWeight: 600,
    color: '#334155',
    lineHeight: 28,
  },
  bellContainer: {
    padding: 4,
  },
  pageTitle: {
    color: '#000000',
    fontWeight: 700,
    fontSize: 18,
  },
  breadcrumb: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5'
  }
});