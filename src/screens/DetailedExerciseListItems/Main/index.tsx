import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomButton, CustomSectionList, EmptyList, ListItem } from '@/components';
import { Icons } from '@/constants/icons';
import { HomeScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectDetailedExerciseListItems } from '@/redux/slices/detailedExerciseListItems';
import { thunkGetDetailedExerciseListItems } from '@/redux/slices/detailedExerciseListItems/thunks';
import { selectIsUserChoosedMetricSystem } from '@/redux/slices/user';
import type {
  DetailedExerciseListItem,
  GetDetailedExerciseListItemsDTO,
} from '@/types/detailedExerciseListItem';
import type { HomeStackNavigationParams } from '@/types/homeStackNavigation';
import { weightMeasurementSystem, weightValueFormat } from '@/utils/weightMeasure';

import { getStyles } from './styles';

type DetailedExerciseListItemsScreenProps = NativeStackScreenProps<
  HomeStackNavigationParams,
  HomeScreenNames.DetailedExerciseListItemsScreen
>;

export function DetailedExerciseListItemsScreen({
  route,
  navigation,
}: DetailedExerciseListItemsScreenProps) {
  const { listId, listItemId, name } = route.params;
  const data = useAppSelector(selectDetailedExerciseListItems);
  const isMetricSystemChoosed = useAppSelector(selectIsUserChoosedMetricSystem);
  const dispatch = useAppDispatch();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

  useEffect(() => {
    const payload: GetDetailedExerciseListItemsDTO = {
      listId,
      listItemId,
    };
    dispatch(thunkGetDetailedExerciseListItems(payload));

    navigation.setOptions({
      headerTitle: name,
    });
  }, []);

  const handleNavigate = () => {
    navigation.navigate(HomeScreenNames.CreateDetailedItemModalScreen, {
      listId,
      listItemId,
    });
  };

  const handleInfo = (item: DetailedExerciseListItem) => {
    navigation.navigate(HomeScreenNames.DetailedExerciseListItemInfoModalScreen, {
      listId,
      listItemId,
      detailedId: item.id,
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
                  <Text style={styles.itemInfoTextLeft}>
                    {t('detailedExerciseListItems.repetitionsBadge', { value: '' })}
                  </Text>
                </View>
                <View style={styles.itemInfoSubContainer}>
                  <Text style={styles.itemInfoNumberRight}>
                    {weightValueFormat(item.weight, isMetricSystemChoosed)}
                  </Text>
                  <Text style={styles.itemInfoTextRight}>
                    {t(
                      `detailedExerciseListItems.weightBadgePlain.${weightMeasurementSystem(isMetricSystemChoosed)}`
                    )}
                  </Text>
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <CustomButton
          iconName={Icons.Plus}
          iconStyle={styles.icon}
          buttonStyle={styles.addButton}
          onPress={handleNavigate}
        />
      </View>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <EmptyList
        primaryText={t('detailedExerciseListItems.empty.mainText')}
        secondaryText={t('detailedExerciseListItems.empty.secondaryText')}
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
