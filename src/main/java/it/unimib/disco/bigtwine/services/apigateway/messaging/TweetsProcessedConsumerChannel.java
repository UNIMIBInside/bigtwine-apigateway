package it.unimib.disco.bigtwine.services.apigateway.messaging;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface TweetsProcessedConsumerChannel {

    String CHANNEL = "tweetsProcessedChannel";

    @Input
    SubscribableChannel tweetsProcessedChannel();
}
