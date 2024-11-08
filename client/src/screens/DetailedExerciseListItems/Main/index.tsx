import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomButton, CustomSectionList, EmptyList, ListItem } from '@/components';
import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectDetailedExerciseListItems } from '@/redux/slices/detailedExerciseListItems';
import { thunkGetDetailedExerciseListItems } from '@/redux/slices/detailedExerciseListItems/thunks';
import {
  DetailedExerciseListItem,
  GetDetailedExerciseListItemsDTO,
} from '@/types/detailedExerciseListItem';
import { StackNavigationParams } from '@/types/navigation';

import { getStyles } from './styles';

type DetailedExerciseListItemsScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.DetailedExerciseListItemsScreen
>;

export function DetailedExerciseListItemsScreen({
  route,
  navigation,
}: DetailedExerciseListItemsScreenProps) {
  const { list_id, list_item_id, name, username } = route.params;
  const data = useAppSelector(selectDetailedExerciseListItems);

  const dispatch = useAppDispatch();
  const styles = useStyles(getStyles);

  useEffect(() => {
    const payload: GetDetailedExerciseListItemsDTO = {
      username,
      list_id,
      list_item_id,
    };
    dispatch(thunkGetDetailedExerciseListItems(payload));

    navigation.setOptions({
      headerTitle: name,
    });
  }, []);

  const handleNavigate = () => {
    navigation.navigate(ScreenNames.CreateDetailedItemModalScreen, {
      username,
      list_id,
      list_item_id,
    });
  };

  const handleInfo = (item: DetailedExerciseListItem) => {
    navigation.navigate(ScreenNames.DetailedExerciseListItemInfoModalScreen, {
      username,
      list_id,
      list_item_id,
      detailed_id: item.id,
    });
  };

  return data.length ? (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <CustomSectionList
          sections={data}
          renderItem={({ item, ...props }) => (
            <ListItem
              {...props}
              item={item}
              extractTitle={({ time }) => time}
              onPress={handleInfo}
              titleStyle={styles.time}
            >
              <View style={styles.itemInfoMainContainer}>
                <View style={styles.itemInfoSubContainer}>
                  <Text style={styles.itemInfoNumberLeft}>{item.rep}</Text>
                  <Text style={styles.itemInfoTextLeft}>rep</Text>
                </View>
                <View style={styles.itemInfoSubContainer}>
                  <Text style={styles.itemInfoNumberRight}>{item.weight}</Text>
                  <Text style={styles.itemInfoTextRight}>kg</Text>
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <CustomButton
          iconName='plus'
          iconStyle={styles.icon}
          buttonStyle={styles.addButton}
          onPress={handleNavigate}
        />
      </View>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <EmptyList
        primaryText='No Sets'
        secondaryText='Record your sets to track progress'
        iconName='chart-box-outline'
      />
      <View style={styles.addButtonContainer}>
        <CustomButton
          iconName='plus'
          iconStyle={styles.icon}
          buttonStyle={styles.addButton}
          onPress={handleNavigate}
        />
      </View>
    </View>
  );
}
