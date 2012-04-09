/*
* Copyright 2012 Evgeny Kochnev
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy of
* the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/
package org.atmosphere.tictactoe42a9x;

/**
 * Created by IntelliJ IDEA.
 * User: Jeny
 * Date: 03.04.12
 * Time: 10:49
 * To change this template use File | Settings | File Templates.
 */
public class BaseJsonHttpServletRequest extends AbstractJsonHttpServletRequest {

    private String body;

//    @Override
    public String getBody() {
        return body;
    }

//    @Override
    public void setBody(String body) {
        this.body = body;
    }

}
