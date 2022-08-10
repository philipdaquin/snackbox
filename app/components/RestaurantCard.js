import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeartIcon, ClockIcon, StarIcon } from 'react-native-heroicons/solid'
import { UserIcon } from 'react-native-heroicons/outline'


const RestaurantCard = ({avg_waiting, name, avg_person, ratings, total_reviews, delivery_price}) => {
  return (
    <TouchableOpacity className="w-[281px] h-[179px] bg-black/10  rounded-2xl mr-4">
        {/* Waiting time widget */}
        <View className="
            flex items-center 
            justify-center 
            w-[71px] h-[26px]
            bg-white rounded-[10px]
            absolute left-1 top-1 m-3
            ">
            <Text className="text-black font-bold text-[14px] items-center flex ">
                {ratings} 
                <StarIcon size={18} color={"#ffc107"}/> 
                <Text className="text-[8px] text-gray-500 font-medium">{`(${total_reviews}+)`}</Text>
            </Text>
        </View>
        
        {/* Good for this many persons */}
        <View className="absolute bottom-3 space-y-2 left-4">
            <Text className="text-xl text-left font-bold relative bottom-1 text-white">{name}</Text>
            <View className="flex-row space-x-4">
                <View className="flex items-center justify-center 
                    px-2 h-[23px] bg-[#c8c8c8] rounded-lg">
                    <Text className="text-white font-medium text-sm flex items-center ">
                    <ClockIcon size={16} />{avg_waiting}min</Text>
                </View>
                {/* Free Delivery */}
                <View className="flex items-center justify-center px-2 h-[23px] bg-[#c8c8c8] rounded-lg">
                    <Text className="text-white font-medium text-sm">{delivery_price}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard