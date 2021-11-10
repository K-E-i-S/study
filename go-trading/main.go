package main
 
import (
	"user/lesson/gotrading/config"
	"user/lesson/gotrading/controllers"
	"user/lesson/gotrading/utils"
)

func main() {

	utils.LoggingSettings(config.Config.LogFile)
	controllers.StreamIngestionData()
	controllers.StartWebServer()
}
