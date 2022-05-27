import { FlatList, FlatListProps, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IRNFlatListProps extends FlatListProps<any> {
    onRefresh?: () => void;
    onLoadMore?: () => void;
}

const RNFlatList: React.FC<IRNFlatListProps> = props => {
    const {data, renderItem, onRefresh, onLoadMore} = props;
    return (
        <FlatList
          {...props}
          data={data}
          keyExtractor={(e, i) => i.toString()}
          extraData={data}
          keyboardShouldPersistTaps="handled"
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                onRefresh && onRefresh();
              }}
            />
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => onLoadMore && onLoadMore()}
        />
      );
}

export default RNFlatList;