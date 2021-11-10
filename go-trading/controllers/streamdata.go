package controllers

import (
	"log"
	"user/lesson/gotrading/app/models"
	"user/lesson/gotrading/bitflyer"
	"user/lesson/gotrading/config"
)

func StreamIngestionData() {
	var tickerChannl = make(chan bitflyer.Ticker)
	apiClient := bitflyer.New(config.Config.APIKey, config.Config.APISecret)
	go apiClient.GetRealTimeTicker(config.Config.ProductCode, tickerChannl)
	go func() {
		for ticker := range tickerChannl {
			log.Printf("action=StreamIngestionData, %v", ticker)
			for _, duration := range config.Config.Durations {
				isCreated := models.CreateCandleWithDuration(ticker, ticker.ProductCode, duration)
				if isCreated == true && duration == config.Config.TradeDuration {
					// TODO
				}
			}
		}
	}()
}
