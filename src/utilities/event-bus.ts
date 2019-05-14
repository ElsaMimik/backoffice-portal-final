/**
 * EventBus is used to communicate between different module
 */
import { MsgPopupType } from '@/models/status/message';
import Vue from 'vue';

export const SystemAlert = (type:MsgPopupType, message: string ) => {
	EventBus.$emit('information', {
		type,
		message,
	});
};

const EventBus = new Vue();
export default EventBus;
