package it.unimib.disco.bigtwine.commons.messaging;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface EventConsumerChannel {
    String CHANNEL = "subscribableChannel";

    @Input
    SubscribableChannel subscribableChannel();
}
