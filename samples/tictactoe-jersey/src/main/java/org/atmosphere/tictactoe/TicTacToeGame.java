package org.atmosphere.tictactoe;

import com.google.gson.Gson;
import com.sun.jersey.spi.container.servlet.PerSession;
import org.atmosphere.annotation.Broadcast;
import org.atmosphere.annotation.Suspend;
import org.atmosphere.cpr.*;
import org.atmosphere.jersey.Broadcastable;
import org.atmosphere.jersey.SuspendResponse;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.core.UriInfo;
import java.io.BufferedReader;
import java.io.IOException;

@Produces("text/html;charset=ISO-8859-1")
@PerSession
@Path("/game")
public class TicTacToeGame {

    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(TicTacToeGame.class);

    private Broadcaster gameBroadcaster;
    private static Broadcaster globalGameBroadcaster = null;
    private static TTTGame game = new TTTGame();

    public TicTacToeGame(@Context HttpHeaders headers,
                         @Context UriInfo uriInfo,
                         @Context SecurityContext securityContext,
                         @Context ServletConfig servletConfig,
                         @Context ServletContext servletContext,
                         @Context HttpServletRequest httpServletRequest,
                         @Context HttpServletResponse httpServletResponse,
                         @Context AtmosphereResource atmosphereResource) {

        logger.info("Constructor of TicTacToeGame is called.");

        return;
    }

    @GET
    @Suspend
    @Broadcast
    @Path("/start1")
    public Broadcastable startGet1(@Context HttpHeaders headers,
                                  @Context UriInfo uriInfo,
                                  @Context SecurityContext securityContext,
                                  @Context ServletConfig servletConfig,
                                  @Context ServletContext servletContext,
                                  @Context HttpServletRequest httpServletRequest,
                                  @Context HttpServletResponse httpServletResponse
    ) {

        logger.info("TicTacToeGame.startGet1() method is called.");

        if (gameBroadcaster == null) {
            gameBroadcaster = BroadcasterFactory.getDefault().lookup(DefaultBroadcaster.class, Math.random(), true);
            globalGameBroadcaster = gameBroadcaster;

            gameBroadcaster.getBroadcasterConfig().addFilter(new PerRequestBroadcastFilter() {

                private final org.slf4j.Logger logger = LoggerFactory.getLogger(TicTacToeGame.this.getClass());

                @Override
                public BroadcastAction filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message) {

                    logger.info("PerRequestBroadcastFilter.filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message)");
                    return new BroadcastAction(message);
                }

                @Override
                public BroadcastAction filter(Object originalMessage, Object message) {

                    logger.info("PerRequestBroadcastFilter.filter(Object originalMessage, Object message)");
                    return new BroadcastAction(message);
                }
            });
        }

        int[] initBoard = {0, 0, 0, 0, 1, 0, 0, 0, 0};
        game = new TTTGame(initBoard);

        Gson gson = new Gson();
        String json = gson.toJson(game);
        return new Broadcastable(json, gameBroadcaster);
    }

    @GET
    @Suspend
    @Path("/start2")
    public Broadcastable startGet2(@Context HttpHeaders headers,
                                  @Context UriInfo uriInfo,
                                  @Context SecurityContext securityContext,
                                  @Context ServletConfig servletConfig,
                                  @Context ServletContext servletContext,
                                  @Context HttpServletRequest httpServletRequest,
                                  @Context HttpServletResponse httpServletResponse
    ) {
        logger.info("TicTacToeGame.startGet2() method is called.");

        if (gameBroadcaster == null) {
            gameBroadcaster = BroadcasterFactory.getDefault().lookup(DefaultBroadcaster.class, "game", true);
            globalGameBroadcaster = gameBroadcaster;

            gameBroadcaster.getBroadcasterConfig().addFilter(new PerRequestBroadcastFilter() {

                private final org.slf4j.Logger logger = LoggerFactory.getLogger(TicTacToeGame.this.getClass());

                @Override
                public BroadcastAction filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message) {

                    logger.info("PerRequestBroadcastFilter.filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message)");
                    return new BroadcastAction(message);
                }

                @Override
                public BroadcastAction filter(Object originalMessage, Object message) {

                    logger.info("PerRequestBroadcastFilter.filter(Object originalMessage, Object message)");
                    return new BroadcastAction(message);
                }
            });
        }

        int[] initBoard = {0, 0, 0, 0, 1, 0, 0, 0, 0};
        game = new TTTGame(initBoard);

        Gson gson = new Gson();
        String json = gson.toJson(game);
        return new Broadcastable(json, gameBroadcaster);
    }

    @GET
    @Path("/start3")
    public SuspendResponse<String> startGet3(@Context HttpHeaders headers,
                                            @Context UriInfo uriInfo,
                                            @Context SecurityContext securityContext,
                                            @Context ServletConfig servletConfig,
                                            @Context ServletContext servletContext,
                                            @Context HttpServletRequest httpServletRequest,
                                            @Context HttpServletResponse httpServletResponse,
                                            @Context AtmosphereResource atmosphereResource) {

        logger.info("TicTacToeGame.startGet3() method is called.");

        int[] initBoard = {0, 0, 0, 0, 1, 0, 0, 0, 0};
        game = new TTTGame(initBoard);

        if (gameBroadcaster == null) {
            gameBroadcaster = BroadcasterFactory.getDefault().lookup(DefaultBroadcaster.class, "game", true);
            globalGameBroadcaster = gameBroadcaster;

            gameBroadcaster.getBroadcasterConfig().addFilter(new PerRequestBroadcastFilter() {

                private final org.slf4j.Logger logger = LoggerFactory.getLogger(TicTacToeGame.this.getClass());

                @Override
                public BroadcastAction filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message) {

                    logger.info("PerRequestBroadcastFilter.filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message)");
                    return new BroadcastAction(message);
                }

                @Override
                public BroadcastAction filter(Object originalMessage, Object message) {

                    logger.info("PerRequestBroadcastFilter.filter(HttpServletRequest request, HttpServletResponse response, Object message)");
                    return new BroadcastAction(message);
                }
            });
        }

        return new SuspendResponse.SuspendResponseBuilder<String>()
                .broadcaster(gameBroadcaster)
                .outputComments(true)
                .addListener(new AtmosphereResourceEventListener() {

                    @Override
                    public void onSuspend(AtmosphereResourceEvent event) {
                        Gson gson = new Gson();
                        String json = gson.toJson(game);
                        gameBroadcaster.broadcast(json);
                    }

                    @Override
                    public void onResume(AtmosphereResourceEvent event) {
                        return;
                    }

                    @Override
                    public void onDisconnect(AtmosphereResourceEvent event) {
                        return;
                    }

                    @Override
                    public void onBroadcast(AtmosphereResourceEvent event) {
                        return;
                    }

                    @Override
                    public void onThrowable(AtmosphereResourceEvent event) {
                        return;
                    }
                })
                .build();
    }

    @GET
    @Suspend
    @Path("/start4")
    public String startGet4(@Context HttpHeaders headers,
                            @Context UriInfo uriInfo,
                            @Context SecurityContext securityContext,
                            @Context ServletConfig servletConfig,
                            @Context ServletContext servletContext,
                            @Context HttpServletRequest httpServletRequest,
                            @Context HttpServletResponse httpServletResponse,
                            @Context AtmosphereResource atmosphereResource) {

        logger.info("TicTacToeGame.startGet4() method is called.");

        int[] initBoard = {0, 0, 0, 0, 1, 0, 0, 0, 0};
        game = new TTTGame(initBoard);

        if (gameBroadcaster == null) {
            gameBroadcaster = BroadcasterFactory.getDefault().lookup(DefaultBroadcaster.class, "game", true);
            globalGameBroadcaster = gameBroadcaster;

            gameBroadcaster.getBroadcasterConfig().addFilter(new PerRequestBroadcastFilter() {

                private final org.slf4j.Logger logger = LoggerFactory.getLogger(TicTacToeGame.this.getClass());

                @Override
                public BroadcastAction filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message) {

                    logger.info("PerRequestBroadcastFilter.filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message)");
                    return new BroadcastAction(message);
                }

                @Override
                public BroadcastAction filter(Object originalMessage, Object message) {

                    logger.info("PerRequestBroadcastFilter.filter(HttpServletRequest request, HttpServletResponse response, Object message)");
                    return new BroadcastAction(message);
                }
            });
        }

        gameBroadcaster.addAtmosphereResource(atmosphereResource);

        atmosphereResource.addEventListener(new AtmosphereResourceEventListener() {

            @Override
            public void onSuspend(AtmosphereResourceEvent event) {
                Gson gson = new Gson();
                String json = gson.toJson(game);
                gameBroadcaster.broadcast(json);
            }

            @Override
            public void onResume(AtmosphereResourceEvent event) {
                return;
            }

            @Override
            public void onDisconnect(AtmosphereResourceEvent event) {
                return;
            }

            @Override
            public void onBroadcast(AtmosphereResourceEvent event) {
                return;
            }

            @Override
            public void onThrowable(AtmosphereResourceEvent event) {
                return;
            }
        });
        return "Suspend";
    }

    @POST
    @Suspend
    @Broadcast
    @Path("/start1")
    public Broadcastable startPost1(@Context HttpHeaders headers,
                                   @Context UriInfo uriInfo,
                                   @Context SecurityContext securityContext,
                                   @Context ServletConfig servletConfig,
                                   @Context ServletContext servletContext,
                                   @Context HttpServletRequest httpServletRequest,
                                   @Context HttpServletResponse httpServletResponse,
                                   @Context AtmosphereResource atmosphereResource
    ) {

        logger.info("TicTacToeGame.startPost1() method is called.");

        int[] initBoard = {0, 0, 0, 1, 1, 1, 0, 0, 0};
        game = new TTTGame(initBoard);

        Gson gson = new Gson();
        String json = gson.toJson(game);
        return new Broadcastable(json, gameBroadcaster);
    }

    @POST
    @Suspend
    @Broadcast
    @Path("/start2")
    public Broadcastable startPost2(@Context HttpHeaders headers,
                                   @Context UriInfo uriInfo,
                                   @Context SecurityContext securityContext,
                                   @Context ServletConfig servletConfig,
                                   @Context ServletContext servletContext,
                                   @Context HttpServletRequest httpServletRequest,
                                   @Context HttpServletResponse httpServletResponse,
                                   @Context AtmosphereResource atmosphereResource
    ) {

        logger.info("TicTacToeGame.startPost2() method is called.");

        int[] initBoard = {0, 0, 0, 1, 1, 1, 0, 0, 0};
        game = new TTTGame(initBoard);

        Gson gson = new Gson();
        String json = gson.toJson(game);
        return new Broadcastable(json, gameBroadcaster);
    }

    @POST
    @Suspend
    @Broadcast
    @Path("/start3")
    public Broadcastable startPost3(@Context HttpHeaders headers,
                                   @Context UriInfo uriInfo,
                                   @Context SecurityContext securityContext,
                                   @Context ServletConfig servletConfig,
                                   @Context ServletContext servletContext,
                                   @Context HttpServletRequest httpServletRequest,
                                   @Context HttpServletResponse httpServletResponse,
                                   @Context AtmosphereResource atmosphereResource
    ) {

        logger.info("TicTacToeGame.startPost3() method is called.");

        int[] initBoard = {0, 0, 0, 1, 1, 1, 0, 0, 0};
        game = new TTTGame(initBoard);

        Gson gson = new Gson();
        String json = gson.toJson(game);
        return new Broadcastable(json, gameBroadcaster);
    }

    @POST
    @Suspend
    @Broadcast
    @Path("/start4")
    public Broadcastable startPost4(@Context HttpHeaders headers,
                                   @Context UriInfo uriInfo,
                                   @Context SecurityContext securityContext,
                                   @Context ServletConfig servletConfig,
                                   @Context ServletContext servletContext,
                                   @Context HttpServletRequest httpServletRequest,
                                   @Context HttpServletResponse httpServletResponse,
                                   @Context AtmosphereResource atmosphereResource
    ) {

        logger.info("TicTacToeGame.startPost4() method is called.");

        int[] initBoard = {0, 0, 0, 1, 1, 1, 0, 0, 0};
        game = new TTTGame(initBoard);

        Gson gson = new Gson();
        String json = gson.toJson(game);
        return new Broadcastable(json, gameBroadcaster);
    }

    @POST
    @Path("/turn/{cell}")
    @Broadcast
    public Broadcastable turnPost(@PathParam("cell") String cellStr,
                                  @Context HttpHeaders headers,
                                  @Context UriInfo uriInfo,
                                  @Context SecurityContext securityContext,
                                  @Context ServletConfig servletConfig,
                                  @Context ServletContext servletContext,
                                  @Context HttpServletRequest httpServletRequest,
                                  @Context HttpServletResponse httpServletResponse,
                                  @Context AtmosphereResource atmosphereResource) {

        logger.info("TicTacToeGame.turnPost() method is called.");

        int cell = -1;

        if (cellStr == null) {
            cellStr = "0";
        }
        try {
            cell = Integer.parseInt(cellStr);
        } catch (NumberFormatException nfe) {
            cell = 0;
        }

        game.turn(cell);

        Gson gson = new Gson();
        String json = gson.toJson(game);
        if (gameBroadcaster == null) {
            logger.error("TicTacToeGame.turnPost(): Session doesn't have broadcaster :(.");
            return new Broadcastable(json, globalGameBroadcaster);
        }

        return new Broadcastable(json, gameBroadcaster);
    }

    @GET
    @Path("/turn/{cell}")
    @Broadcast
    public Broadcastable turnGet(@PathParam("cell") String cellStr,
                                 @Context HttpHeaders headers,
                                 @Context UriInfo uriInfo,
                                 @Context SecurityContext securityContext,
                                 @Context ServletConfig servletConfig,
                                 @Context ServletContext servletContext,
                                 @Context HttpServletRequest httpServletRequest,
                                 @Context HttpServletResponse httpServletResponse,
                                 @Context AtmosphereResource atmosphereResource) {

        logger.info("TicTacToeGame.turnGet() method is called.");

        int cell = -1;

        if (cellStr == null) {
            cellStr = "0";
        }
        try {
            cell = Integer.parseInt(cellStr);
        } catch (NumberFormatException nfe) {
            cell = 0;
        }

        game.turn(cell);

        String body = "";
        try {
            BufferedReader br = atmosphereResource.getRequest().getReader();
            String part = "";

            while ((part = br.readLine()) != null) { // while loop begins here
                body = body + part;
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        Gson gson = new Gson();
        String json = gson.toJson(game);
        if (gameBroadcaster == null) {
            logger.error("TicTacToeGame.turnGet(): Session doesn't have broadcaster :(.");
            return new Broadcastable(json, globalGameBroadcaster);
        }
        return new Broadcastable(json, gameBroadcaster);
    }

}