package main

import (
	"fmt"

	"hello/go-discord/bot"
	"hello/go-discord/config"
)

func main() {
	err := config.ReadConfig()

	if err != nil {
		fmt.Println(err)
		return
	}

	bot.Start()

	<-make(chan struct{})

	return
}
