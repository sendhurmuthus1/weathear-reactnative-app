import { 
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import moment from 'moment';
import styles from '../styles/styles';

interface Props {
  data: object;
}

const List: FC<Props> = ({data}) => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.day}>{moment(data?.dt_txt).format('ddd')}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.smallLabel}>{data?.weather[0]?.description}</Text>
        </View>
        <View style={styles.column}>
          <View style={styles.innerContainer}>
            <Text style={styles.day}>{data?.main.temp}°C</Text>
            <Text style={styles.smallLabel}> Feels {data?.main?.feels_like}°C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default List;
